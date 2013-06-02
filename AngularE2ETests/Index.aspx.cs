using System.Web.Services;

namespace AngularE2ETests
{
    public partial class Index : PageBase
    {
        private const string Fruit = "Fruit";
        private const string Vegetables = "Vegetables";
        private const string Herbs = "Herbs";

        private static readonly string[] FirstLevelItems = new[]
            {
                Fruit,
                Vegetables,
                Herbs
            };

        [WebMethod]
        public static string[] GetFirstLevelItems()
        {
            return FirstLevelItems;
        }

        [WebMethod]
        public static string[] GetSecondLevelItems(string firstLevelItem)
        {
            switch (firstLevelItem)
            {
                case Fruit:
                    return new[]
                        {
                            "Apple",
                            "Orange",
                            "Banana"
                        };

                case Vegetables:
                    return new[]
                        {
                            "Carrot",
                            "Parsnip",
                            "Potato"
                        };

                case Herbs:
                    return new[]
                        {
                            "Basil",
                            "Thyme",
                            "Mint"
                        };

                default:
                    return new string[0];
            }
        }
    }
}
