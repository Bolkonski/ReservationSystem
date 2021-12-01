using ReservationSystem.Core.Models;
using ReservationSystem.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReservationSystem.Business.Services.Impl
{
    public class ContactService: IContactService
    {
        private IContactRepository _repository;
        public ContactService(IContactRepository repository)
        {
            _repository = repository;
        }
        public async Task<Contact> Add(Contact contact)
        {
            return await _repository.Add(contact);
        }

        public async Task Delete(Contact contact)
        {
            await _repository.Delete(contact);
        }

        public async Task<IEnumerable<Contact>> GetContacts()
        {
            return await _repository.GetContacts();
        }
        public async Task<Contact> GetContactById(int id)
        {
            return await _repository.GetContactById(id);
        }

        public void Update(Contact contact)
        {
            _repository.Update(contact);
        }

        public bool ContactExists(int id)
        {
            return _repository.ContactExists(id);
        }

        public async Task Save()
        {
            await _repository.Save();
        }
    }
}
