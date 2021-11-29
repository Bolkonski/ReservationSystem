using System.Collections.Generic;
using System.Threading.Tasks;
using ReservationSystem.Data.Repositories;
using ReservationSystem.Core.Models;

namespace ReservationSystem.Business.Services.Impl
{
    public class ReservationService : IReservationService
    {
        private IReservationRepository _repository;
        public ReservationService(IReservationRepository repository)
        {
            _repository = repository;
        }
        public async Task<Reservation> Add(Reservation reservation)
        {
            return await _repository.Add(reservation);
        }

        public async Task Delete(Reservation reservation)
        {
            await _repository.Delete(reservation);
        }

        public async Task<Reservation> GetReservationDetails(int id)
        {
            return await _repository.GetReservationDetails(id);
        }

        public async Task<IEnumerable<Reservation>> GetReservations()
        {
            return await _repository.GetReservations();
        }
        public async Task<Reservation> GetReservationById(int id)
        {
            return await _repository.GetReservationById(id);
        }

        public async Task Update(Reservation reservation)
        {
            await _repository.Update(reservation);
        }

        public bool ReservationExists(int id)
        {
            return _repository.ReservationExists(id);
        }
    }
}
