using System.Web.Configuration;
using System.Web.Services;
using System.Web.UI;

namespace AngularE2ETests
{
    public partial class Index : Page
    {
        public bool IsInProduction
        {
            get
            {
                var stringValue = WebConfigurationManager.AppSettings["InProduction"];
                bool boolValue;
                return bool.TryParse(stringValue, out boolValue) && boolValue;
            }
        }

        public bool IsEndToEndTest
        {
            get
            {
                if (IsInProduction)
                {
                    return false;
                }

                var mode = Request.QueryString["mode"];
                return !string.IsNullOrEmpty(mode) && mode.StartsWith("e2etest");
            }
        }

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
