# Univention Corporate Server (UCS)

[Univention Corporate Server (UCS)](https://www.univention.com/products/ucs/) is an enterprise Linux distribution derived from Debian GNU/Linux with a strong focus on identity and infrastructure management. It provides an Active Directory compatible domain and allows deployment in Microsoft Active Directory based infrastructure. Furthermore, it supports authentication protocols LDAP, SAML and OpenID Connect.

Rocket.Chat is available as app in Univention App Center.

## Deployment via Univention App Appliance

The fastest and easiest way to run a deployment of Rocket.Chat on UCS is to download and run a virtual machine with Rocket.Chat and UCS pre-installed, called app appliance. The app appliance is available for VMware, VirtualBox and KVM.

1. Download the app appliance from the [Univention App Catalog](https://www.univention.com/products/univention-app-center/app-catalog/rocketchat/) or with the direct links below:
   * [VirtualBox image](https://appcenter.software-univention.de/univention-apps/current/rocketchat/Univention-App-rocketchat-virtualbox.ova)
   * [VMware ESXi image](https://appcenter.software-univention.de/univention-apps/current/rocketchat/Univention-App-rocketchat-ESX.ova)
   * [VMware Workstation image](https://appcenter.software-univention.de/univention-apps/current/rocketchat/Univention-App-rocketchat-vmware.zip)
   * [KVM image](https://appcenter.software-univention.de/univention-apps/current/rocketchat/Univention-App-rocketchat-KVM.qcow2)
2. [Import the app appliance](https://www.univention.com/downloads/ucs-download/guide-for-virtual-appliance-import/) to the desired hypervisor.
3. Follow the instructions in the setup wizard.
4. [Register](https://help.univention.com/t/how-to-register-a-univention-app-appliance/11294) your app appliance.

## Installation via Univention App Center

If there is already a deployment of UCS running, Rocket.Chat can easily be installed directly via the App Center.

Alternatively, the above mentioned app appliance can be setup and joined into an existing UCS deployment, called domain.
