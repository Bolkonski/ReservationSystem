using System.Collections.Generic;
using System.Threading.Tasks;
using ReservationSystem.Core.Models;

namespace ReservationSystem.Data.Repositories
{
    public interface IReservationRepository
    {
        Task<IEnumerable<Reservation>> GetReservations();
        Task<Reservation> GetReservationById(int id);
        Task<Reservation> GetReservationDetails(int id);
        bool ReservationExists(int id);
        Task<Reservation> Add(Reservation reservation);
        Task Update(Reservation reservation);
        Task Delete(Reservation reservation);
    }
}
