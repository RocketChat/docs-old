# Choosing a Deployment Method

RocketChat offers a series of deployment methods and making a choice on which to use can get a little conflicting

Although we recommend using [Docker and Docker Compose](../simple-deployment-methods/docker-and-docker-compose/), you may want to know when best to consider any of the other deployment methods.

{% hint style="info" %}
**Deployment Methods**: Docker, Snap, Manual, Ansible, etc

**Deployment Platforms**: AWS, Digital Ocean, GCP, etc
{% endhint %}

## Considerations

There are a few characteristics to be considered before deploying Rocket.Chat. Let us take a look at these points for better evaluation and scoring.

### Scalability

Scalability simply refers to the ability of a system to handle an increasing amount of work or resources. In this case, we are talking about which deployment method can be easily scaled.

For example: Say you have a single instance of Rocket.Chat server running which can handle thousands of simultaneous online users, what happens when the number of users increases by a multiple of a thousand? Do you terminate and get a bigger instance or get more Rocket.Chat servers to handle the extra users?

### Ease of Deployment

This determines how easy a deployment method can be followed. With the aim of data ownership and privacy, Rocket.Chat can be deployed easily without any technical knowledge.

### Ease of Maintenance

Just like the ease of deployment, ease of maintenance is also a factor to consider before choosing a deployment method. By maintaining, we refer to the activities that are to be performed like updating their instances, patching security fixes, updating components as needed and changing configurations and community support.

### Official Support

Rocket.Chat offers a variety of official support, this factor is based on update frequency, bug resolutions, feature implementations.

### Community Support

A lot of the time, problems faced with deployment are not about the application itself misbehaving, but rather some wrong configurations made by the user. Such configurations can be related directly with a dependency, the deployment method, and/or platform.

In such cases, it’d be much easier to overcome that and be successful, by visiting the problem tools' guide or community page and request for support.

This is something that’s ignored very frequently but should be considered for a long-term commitment.

## Scorecard

This scorecard shows a rating(on 05) of each deployment method against each consideration.

|                         |                    Docker                   |                    Snaps                   |                                                                                                          One Click Deploment                                                                                                          |
| ----------------------- | :-----------------------------------------: | :----------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Scalability**         | <mark style="color:blue;">**`3.75`**</mark> |  <mark style="color:red;">**`1.0`**</mark> |                                                                                               <mark style="color:red;">**`2.0`**</mark>                                                                                               |
| **Ease of Deployment**  | <mark style="color:blue;">**`3.75`**</mark> | <mark style="color:blue;">**`4.5`**</mark> |                                                                                               <mark style="color:blue;">**`5.0`**</mark>                                                                                              |
| **Ease of Maintenance** |  <mark style="color:blue;">**`4.0`**</mark> | <mark style="color:blue;">**`5.0`**</mark> |                                                                                               <mark style="color:red;">**`1.0`**</mark>                                                                                               |
| **Official Support**    |  <mark style="color:blue;">**`5.0`**</mark> | <mark style="color:blue;">**`5.0`**</mark> | <p>Digital Ocean: <mark style="color:blue;"><strong><code>5.0.</code></strong></mark><br><mark style="color:blue;"><strong><code></code></strong></mark>Linode: <mark style="color:red;"><strong><code>0.0</code></strong></mark></p> |
| **Community Support**   |  <mark style="color:blue;">**`5.0`**</mark> |  <mark style="color:red;">**`2.0`**</mark> |                                                                                               <mark style="color:blue;">**`4.0`**</mark>                                                                                              |
| Comments                |              See comments below             |             See comments below             |                                                                                      All one click deployment methods have thesame score ranking.                                                                                     |

### Comments

{% tabs %}
{% tab title="Docker" %}
* Scaling your Rocket.Chat deployment using Docker, more specifically, Docker Compose is quite easy. As easy as editing a text file can be.
*   To install using Docker Compose, we just needed a single `YAML` file, namely a compose file. How easier can it really be?

    But, even though the Rocket.Chat deployment part is easy, the initial setup needs a little more work. Configuring and securing docker can get even more complicated, although worth it, isn’t the easiest, especially compared to some of the other options we have in this list.
* Maintaining the installation using Docker is also very easy. From changing configurations, data backups to updating components, it is very straightforward and easy to do.
* Docker deployment is officially supported by Rocket.Chat.
* Docker has a large following and a huge community around it. It is one of the easiest tools to get help from the community.
{% endtab %}

{% tab title="Snap" %}
*   Snap deployment is not horizontally scalable, in other words, you can’t add more instances to your existing deployment.

    To be technically correct, you actually can, but the process will not only be unideal but also tedious and non-repeatable.

    This deployment is not meant to be scaled horizontally, but obviously, you can scale vertically (within limits).
* Snap deployment is one of the easiest deployments out there.
* Managing your snap Rocket.Chat installation is the easiest.
  * updates are automatic
    * most configurations are already handled by the core Rocket.Chat team with sane defaults
    * helper scripts for anyone to be able to change configurations in seconds
* Our snap deployment is totally supported officially
*   The snap community isn’t small, but it’s also not so big either. Also, the fact that snaps are pre-packaged by us and the users can’t really modify anything by themselves, makes community support even more inconsequential.

    For support related to Rocket.Chat snap installs, the best bet is the Rocket.Chat community itself, and more often than not, that is where the snap community will send you as well if you go there first.
{% endtab %}

{% tab title="One Click Installs" %}
You can leverage deploying Rocket.Chat with no effort using one-click installs apps on many cloud providers like DigitalOcean, Linode, AWS (as an AMI-Amazon Machine Image).

* The backing method for our one-click apps is manual installs. They are not terrible to scale horizontally, but also not the best option either.
* Simple procedure to follow for deployment
* Being backed by manual method, maintenance can get a bit difficult, since you have to personally have to manage from updates to fixes, to configuration management.
* Most of the one-click apps are backed by manual install and the others docker. So in terms of community support, you will get more than enough people to guide you in case you get stuck on something.
{% endtab %}
{% endtabs %}
