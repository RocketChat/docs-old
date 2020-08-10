# Server Lookup

placeholder

<p> Is this Rocket.Chat Workspace Hosted by Rocket.Chat? </p>

<form id="lookup-form" onSubmit='return isHosted()'>
    <fieldset>
        <input required minlength="3" class="input input--light" type="text" id="lookup" name="lookup"
            placeholder="Type the server domain" />

        <div class="space--2"></div>
        <button type="submit" class="button">Search</button>
        <div class="space--4"></div>
    </fieldset>
</form>

<div id="lookup-result" class="lookup-result hidden">
    <h3 class="display--small">Result:</h3>
    <p id="result-text"></p>
</div>

<p>Contact <a class="button--link" href="mailto:legal@rocket.chat">legal@rocket.chat</a> in case of legal requests or <a class="button--link" href="mailto:support@rocket.chat" >support@rocket.chat</a> in case of support requests</p>

<script>
    var form = document.getElementById("lookup-form");
    form.addEventListener('submit', isHosted);

    function isHosted(event) {
        event.preventDefault();
        var xhttp = new XMLHttpRequest();
        var domain = document.getElementById("lookup").value
        var resultWrapper = document.getElementById("lookup-result")
        var resultElement = document.getElementById("result-text");
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                resultElement.innerHTML = '';
                resultWrapper.className = 'lookup-result'
                if(data.hosted) {
                    resultElement.className = 'hosted-by-true'
                    resultElement.append('True. This Workspace is hosted by Rocket.Chat');
                } else {
                    resultElement.className = 'hosted-by-false'
                    resultElement.append('False. This Workspace is NOT hosted by Rocket.Chat');
                }


            }
        };
        xhttp.open(
            "GET",
            `https://cloud.rocket.chat/api/v1/utils/checkhosted?domain=${domain}`,
            true
        );
        xhttp.send();
    };
</script>
