using System;
using System.ComponentModel.DataAnnotations;

namespace ReservationSystem.Core.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Ranking { get; set; } = 1;
        public bool Favorite { get; set; } = false;
        public string Description { get; set; }
        public int ContactId { get; set; }
        public virtual Contact Contact { get; set; }
    }
}
