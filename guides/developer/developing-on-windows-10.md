# Developing on Windows 10

Microsoft finally released Windows Subsystem for Linux 2 \([WSL 2](https://docs.microsoft.com/en-us/windows/wsl/wsl2-index)\) in June of 2020.   Before this time, development of large and complex NodeJS based servers/full-stack applications such as Rocket.Chat on Windows is close to impossible.

WSL 2 is a complete architectural overhaul of Linux on Windows, installing a full genuine Linux kernel \(built by Microsoft\) alongside the classic Windows kernel. The Linux kernel and Windows kernel can now share system resources, such as memory and CPU, at a granularity not previously possible.  It also includes major performance optimization on cross-subsystems file sharing, boot, and other developer-relevant areas.

You must be using Windows 10, version 2004 or later release to take advantage of WSL 2, and to setup Rocket.Chat development.    

### Before you start

The following are prerequisites for developing Rocket.Chat on Windows 10:

1. Make sure you have Windows 10, version 2004 or later
2. Install and configure WSL 2 by following [Microsoft documentation,](https://docs.microsoft.com/en-us/windows/wsl/install-win10)  making sure to select Ubuntu 20.04 LTS distribution as your choice
3. Download and install the latest [Linux Kernel Updates](https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel)

###  Machine requirement

Building Rocket.Chat requires a minimum of 8 GB of RAM memory on the Linux subsystem. On version 2004, about 4 GB of RAM appears to be reserved for the Windows subsystem. You will need a Windows machine with the following minimal requirement to develop Rocket.Chat:

* 12 GB of RAM memory  \(16+ GB highly recommended\)
* 4 or more cores on CPU \(at least 3 GHz boosted,  4.2 GHz or higher recommended\)
* 80 GB of available fast SSD storage \( PCIe 4.0 NVMe SSD recommended\)







