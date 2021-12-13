using Microsoft.EntityFrameworkCore;

namespace ReservationSystem.Data.StoredProcedures
{
    public class StoredProceduresManager
    {
        private static ReservationSystemContext _context;
        public StoredProceduresManager(ReservationSystemContext context)
        {
            _context = context;
            //cargar sql desde directorio
        }
        public static void Create()
        {
            _context.Database.ExecuteSqlRaw("");
        }
    }
}
