# Choosing a Deployment Method

{% hint style="info" %}
[ **👉 Trouble installing or deploying Rocket.Chat?** Join our Weekly Technical Helpline to get real-time help from our team!](https://app.livestorm.co/rocket-chat/rocketchats-weekly-technical-helpline?type=detailed)
{% endhint %}

## Choosing a Deployment Method

Rocket.Chat offers a series of deployment methods, and making a choice on which to use can get a little conflicting. Although we recommend using [Docker and Docker Compose](https://app.gitbook.com/o/-M41dOPtnjO7qK6KCyrt/s/-M418Ul0aSTwf2PYsyPW/quick-start/deploying-rocket.chat/rapid-deployment-methods/docker-and-docker-compose), you may want to know when best to consider any other deployment methods.

* **Deployment Methods**: Docker, Snap, Manual, Ansible, etc
* **Deployment Platforms**: AWS, Digital Ocean, GCP, etc

{% hint style="danger" %}
The Rocket.Chat architecture does not support serverless deployment models such as AWS Fargate.&#x20;
{% endhint %}

### Considerations <a href="#considerations" id="considerations"></a>

There are a few characteristics to be considered before deploying Rocket.Chat. Let us take a look at these points for better evaluation and scoring.

#### Scalability <a href="#scalability" id="scalability"></a>

Scalability simply refers to the ability of a system to handle an increasing amount of work or resources. In this case, we are talking about which deployment method can be easily scaled. For example: Say you have a single instance of Rocket.Chat server running which can handle thousands of simultaneous online users, what happens when the number of users increases by a multiple of a thousand? Do you terminate and get a bigger instance or get more Rocket.Chat servers to handle the extra users?

#### Ease of Deployment <a href="#ease-of-deployment" id="ease-of-deployment"></a>

This determines how easily a deployment method can be followed. With the aim of data ownership and privacy, Rocket.Chat can be deployed easily without any technical knowledge.

#### Ease of Maintenance <a href="#ease-of-maintenance" id="ease-of-maintenance"></a>

Just like the ease of deployment, ease of maintenance is also a factor to consider before choosing a deployment method. By maintaining, we refer to the activities to be performed, like updating their instances, patching security fixes, updating components as needed, and changing configurations and community support.

#### Official Support <a href="#official-support" id="official-support"></a>

Rocket.Chat offers a variety of official support. This factor is based on update frequency, bug resolutions, and feature implementations.

#### Community Support <a href="#community-support" id="community-support"></a>

A lot of the time, problems faced with deployment are not about the application itself misbehaving but rather some wrong configurations made by the user. Such configurations can be related directly to a dependency, the deployment method, and/or the platform. In such cases, it’d be much easier to overcome that and be successful by visiting the problem tools' guide or community page and request for support. This is something that’s ignored very frequently but should be considered for a long-term commitment.

### Scorecard <a href="#scorecard" id="scorecard"></a>

This scorecard shows a rating(on 05) of each deployment method against each consideration.

| Text                    | Docker             | Snaps              | One Click Deployment                                          |
| ----------------------- | ------------------ | ------------------ | ------------------------------------------------------------- |
| **Scalability**         | **`3.75`**         | **`1.0`**          | **`2.0`**                                                     |
| **Ease of Deployment**  | **`3.75`**         | **`4.5`**          | **`5.0`**                                                     |
| **Ease of Maintenance** | **`4.0`**          | **`5.0`**          | **`1.0`**                                                     |
| **Official Support**    | **`5.0`**          | **`5.0`**          | Digital Ocean: **`5.0.`** Linode: **`0.0`**                   |
| **Community Support**   | **`5.0`**          | **`2.0`**          | **`4.0`**                                                     |
| Comments                | See comments below | See comments below | All one click deployment methods have the same score ranking. |

#### Comments <a href="#comments" id="comments"></a>

DockerSnapOne Click Installs

* Scaling your Rocket.Chat deployment using Docker, more specifically, Docker Compose is relatively easy. As easy as editing a text file can be.
* To install using Docker Compose, we just needed a single `YAML` file, namely a compose file. How easier can it really be? But, even though the Rocket.Chat deployment is easy, the initial setup needs a little more work. Configuring and securing docker can get even more complicated. Although worth it, isn’t the easiest, especially compared to some of the other options we have on this list.
* Maintaining the installation using Docker is also very easy. From changing configurations, and data backups to updating components, it is very straightforward and easy to do.
* Docker deployment is officially supported by Rocket.Chat.
* Docker has a large following and a massive community around it. It is one of the easiest tools to get help from the community.
