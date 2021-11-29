using System.Collections.Generic;
using System.Threading.Tasks;
using ReservationSystem.Core.Models;

namespace ReservationSystem.Business.Services
{
    public interface IReservationService
    {
        Task<Reservation> Add(Reservation reservation);

        Task Delete(Reservation reservation);

        Task<Reservation> GetReservationDetails(int id);

        Task<IEnumerable<Reservation>> GetReservations();
        Task<Reservation> GetReservationById(int id);

        Task Update(Reservation reservation);

        bool ReservationExists(int id);
    }
}
