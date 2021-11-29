using System;

namespace ReservationSystem.Core.Models
{
    public class Reservation
    {
        public int Id { get; set; }

        public int ContactId { get; set; }

        public DateTime Date { get; set; }

        public int Ranking { get; set; } = 0;

        public bool IsFavorite { get; set; } = false;

        public virtual Contact Contact { get; set; }
    }
}
