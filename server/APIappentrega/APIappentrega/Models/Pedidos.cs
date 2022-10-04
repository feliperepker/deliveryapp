using System.ComponentModel.DataAnnotations;

namespace APIappentrega.Models
{
    public class Pedidos
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Area { get; set; }
        [Required]
        public string Pedido { get; set; }
        [Required]
        public bool Status { get; set; }
        [Required]
        public DateTime Date { get; set; }
    }
}
