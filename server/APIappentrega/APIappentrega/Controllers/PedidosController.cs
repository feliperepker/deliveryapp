using Microsoft.AspNetCore.Mvc;
using APIappentrega.Data;
using APIappentrega.Models;

namespace APIappentrega.Controllers

{
    [ApiController]
    [Route("[controller]")]
    public class PedidosController : ControllerBase
    {
        private readonly EntregaContext _context;
        public PedidosController(EntregaContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]        
        public IActionResult GetPedidos(int id)
        {
            Pedidos pedidos = _context.tb_pedidos.FirstOrDefault(pedido => pedido.Id== id);
            return Ok(pedidos);
        }


        [HttpPut("{id}")]
        public IActionResult EditArea(int id,[FromBody] Pedidos pedidoNovo)
        {
            DateTime saveNow = DateTime.Now;

            Pedidos pedido = _context.tb_pedidos.FirstOrDefault(a => a.Id == id);

            pedido.Id = pedidoNovo.Id;
            pedido.Area = pedidoNovo.Area;
            pedido.Pedido = pedidoNovo.Pedido;
            pedido.Status = pedidoNovo.Status;
            pedido.Date = saveNow;
            _context.SaveChanges();
            return Ok();
        }
       

    }
}
