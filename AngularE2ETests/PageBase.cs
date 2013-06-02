using System.Web.Configuration;
using System.Web.UI;

namespace AngularE2ETests
{
    public class PageBase : Page
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
    }
}
