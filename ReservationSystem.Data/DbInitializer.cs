using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ReservationSystem.Core.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReservationSystem.Data
{
    public class DbInitializer:IDbInitializer
    {
        private ReservationSystemContext _context;
        public DbInitializer(ReservationSystemContext context)
        {
            _context = context;
        }

        public void CreateDatabase()
        {
           _context.Database.Migrate();
           //StoredProcedures.StoredProceduresManager.Create();
        }

        public void SeedData(string filePath)
        {
            using (StreamReader file = File.OpenText(filePath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JObject json = (JObject)JToken.ReadFrom(reader);
                //Seed contact types
                List<ContactType> contactTypes = json.GetValue("contactTypes").ToObject<List<ContactType>>();
                contactTypes.ForEach(contactType =>
                {
                    if(!_context.ContactType.Any(c=>c.Name==contactType.Name))
                        _context.ContactType.Add(contactType);
                });
                _context.SaveChanges();
            }
        }
    }
}
