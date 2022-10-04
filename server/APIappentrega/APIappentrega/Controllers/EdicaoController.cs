using APIappentrega.Data;
using APIappentrega.Models;
using Microsoft.AspNetCore.Mvc;

namespace APIappentrega.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class EdicaoController : Controller
    {
        private readonly EntregaContext _context;
        public EdicaoController(EntregaContext context)
        {
            _context = context;
        }


        [HttpPut("{id}")]
        public IActionResult EditItem(int id, [FromBody] Pedidos pedidoNovo)
        {

            Pedidos pedido = _context.tb_pedidos.FirstOrDefault(a => a.Id == id);

            pedido.Id = pedidoNovo.Id;
            pedido.Area = pedidoNovo.Area;
            pedido.Pedido += " - " + pedidoNovo.Pedido;
            pedido.Status = pedidoNovo.Status;
            pedido.Date = pedido.Date;
            _context.SaveChanges();
            return Ok();
        }
    }
}
