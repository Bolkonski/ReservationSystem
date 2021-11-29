using System.Collections.Generic;

namespace ReservationSystem.Core.Models
{
    public class ContactType
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<Contact> Contacts { get; set; }
    }
}
