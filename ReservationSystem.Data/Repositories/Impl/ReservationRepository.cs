using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReservationSystem.Core.Models;

namespace ReservationSystem.Data.Repositories.Impl
{
    public class ReservationRepository : IReservationRepository
    {
        private ReservationSystemContext _context;
        public ReservationRepository(ReservationSystemContext context)
        {
            _context = context;
        }
        public async Task<Reservation> Add(Reservation reservation)
        {
            _context.Add(reservation);
            await _context.SaveChangesAsync();
            return reservation;
        }

        public async Task Delete(Reservation reservation)
        {
            _context.Reservation.Remove(reservation);
            await _context.SaveChangesAsync();
        }

        public async Task<Reservation> GetReservationDetails(int id)
        {
            return await _context.Reservation
                   .FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<IEnumerable<Reservation>> GetReservations()
        {
            return await _context.Reservation.ToListAsync();
        }

        public async Task<Reservation> GetReservationById(int id)
        {
            return await _context.Reservation.FindAsync(id);
        }

        public async Task Update(Reservation reservation)
        {
            _context.Update(reservation);
            await _context.SaveChangesAsync();
        }

        public bool ReservationExists(int id)
        {
            return _context.Reservation.Any(e => e.Id == id);
        }
    }
}
