﻿using ReservationSystem.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReservationSystem.Business.Services
{
    public interface IContactService
    {
        Task<IEnumerable<Contact>> GetContacts();
        Task<Contact> GetContactById(int id);
        bool ContactExists(int id);
        Task<Contact> Add(Contact contact);
        Task Delete(Contact contact);
        void Update(Contact contact);
        Task Save();
    }
}