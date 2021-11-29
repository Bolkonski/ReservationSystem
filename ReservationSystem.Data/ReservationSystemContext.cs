using Microsoft.EntityFrameworkCore;
using ReservationSystem.Core.Models;

namespace ReservationSystem.Data
{
    public class ReservationSystemContext : DbContext
    {
        public ReservationSystemContext(DbContextOptions<ReservationSystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Reservation> Reservation { get; set; }
        public virtual DbSet<Contact> Contact { get; set; }
        public virtual DbSet<ContactType> ContactType { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //Table relations and constraints go here

            builder.Entity<Reservation>()
                .HasOne(r => r.Contact)
                .WithMany(c => c.Reservations)
                .HasForeignKey(r => r.ContactId);

            builder.Entity<Reservation>()
                .Property(r => r.Ranking)
                .HasDefaultValue(0);

            builder.Entity<Reservation>()
                .Property(r => r.Ranking)
                .HasDefaultValue(false);

            builder.Entity<Contact>()
                .HasOne(c => c.ContactType)
                .WithMany(ct => ct.Contacts)
                .HasForeignKey(c => c.ContactTypeId);

            builder.Entity<Contact>()
                .HasIndex(c => c.Name)
                .IsUnique();

            builder.Entity<Contact>()
                .Property(c => c.Name)
                .IsRequired();

            builder.Entity<ContactType>()
                .HasIndex(ct => ct.Name)
                .IsUnique();

            builder.Entity<ContactType>()
                .Property(ct => ct.Name)
                .IsRequired();
        }
    }
}
