# Livechat API

## Usage

Livechat API code must be inserted after the livechat installation script and wrapped within `RocketChat(function() { ... });`.

You can call multiple livechat APIs on the same page.

### Set custom field
To set a custom field for a visitor, you can use the following code:

```
<script type="text/javascript">
    RocketChat(function() {
        this.setCustomField('fieldName1', 'Any value you want to store');
        this.setCustomField('fieldName2', 'Any value you want to store');
    });
</script>
```

### Set theme options
To change the online color of the livechat widget, use the following code:

```
<script type="text/javascript">
    RocketChat(function() {
        this.setTheme({ color: '#04436A'});
    });
</script>
```
