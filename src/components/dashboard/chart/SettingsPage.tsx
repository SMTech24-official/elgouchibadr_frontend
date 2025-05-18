import AccountManagement from "../settingssec/AccountManagement";
import ChangePassword from "../settingssec/ChangePassword";
import PaymentGateways from "../settingssec/PaymentGateway";
import PlatformPreferences from "../settingssec/PlatformPreference";

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <PlatformPreferences />
          <ChangePassword />
        </div>
        <div className="space-y-6">
          <AccountManagement />
          <PaymentGateways />
        </div>
      </div>
    </div>
  )
}
