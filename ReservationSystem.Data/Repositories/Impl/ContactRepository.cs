using Microsoft.EntityFrameworkCore;
using ReservationSystem.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReservationSystem.Data.Repositories.Impl
{
    class ContactRepository : IContactRepository
    {
        private ReservationSystemContext _context;
        public ContactRepository(ReservationSystemContext context)
        {
            _context = context;
        }
        public async Task<Contact> Add(Contact contact)
        {
            _context.Add(contact);
            await _context.SaveChangesAsync();
            return contact;
        }

        public async Task Delete(Reservation reservation)
        {
            _context.Reservation.Remove(reservation);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Contact>> GetContacts()
        {
            return await _context.Contact.ToListAsync();
        }

        public async Task<Contact> GetContactById(int id)
        {
            return await _context.Contact.FindAsync(id);
        }

        public bool ContactExists(int id)
        {
            return _context.Contact.Any(e => e.Id == id);
        }

        public async Task Delete(Contact contact)
        {
            _context.Contact.Remove(contact);
            await _context.SaveChangesAsync();
        }

        public void Update(Contact contact)
        {
            _context.Entry(contact).State = EntityState.Modified;
            //_context.Update(contact);
            //await _context.SaveChangesAsync();
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }
    }
}
