using APIappentrega.Models;
using Microsoft.EntityFrameworkCore;

namespace APIappentrega.Data
{
    public class EntregaContext : DbContext
    {
        public EntregaContext(DbContextOptions<EntregaContext> opt) : base(opt)
        {

        }

        public DbSet<Pedidos> tb_pedidos { get; set; }
    }
}
