namespace ReactApp1.Server.Models.DTO
{
    public class ActivityDTO
    {
        public int ActivityId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public DateOnly? Date { get; set; }
        public int CityId { get; set; }
        public int? Remaining { get; set; }
        public int? HotelId { get; set; }
    }
}
