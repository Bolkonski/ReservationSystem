using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ReservationSystem.Data;
using ReservationSystem.Data.Repositories;
using ReservationSystem.Data.Repositories.Impl;
using ReservationSystem.Business.Services;
using ReservationSystem.Business.Services.Impl;

namespace ReservationSystem.Root
{
    public class CompositionRoot
    {
        public CompositionRoot() { }

        public static void InjectDependencies(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ReservationSystemContext>(opts => opts.UseLazyLoadingProxies().UseSqlServer(
                configuration.GetConnectionString("ReservationSystemContext")));
            services.AddScoped<ReservationSystemContext>();
            services.AddScoped<IReservationRepository, ReservationRepository>();
            services.AddScoped<IReservationService, ReservationService>();
        }
        public static void CreateDatabase(System.IServiceProvider services)
        {
            var context = services.GetRequiredService<ReservationSystemContext>();
            context.Database.Migrate();
        }
    }
}
