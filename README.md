Lazy
====

lazy.js, A standalone javascript library to lazy load images

Lazy load your images using html5 data attribute.

### How to Use?

Add `data-lazy` attribute to the image tag.

`<img src="img/loading.gif" data-lazy="img/show.png" />`

### Example
```
<img src="img/loading.gif" data-lazy="img/show.png" style="width:200px; height:200px;" />
<script src="js/lazy.js"></script>
<script>
lazy.init({
	delay:1000,
	callback : function(elem){ 
	  console.log(elem)
	}
});
</script>
```

###APIs

####init()

Function to bootstrap lazy with custom options.

##### Arguments

Pass an Object with following Options

##### delay
Type: Number Default: 0

You can specify the number of seconds you want to delay to load the images.

##### callback
Type: Function

A callback function to which the element which has been updated will be passed as an argument. You can use this to
make any modifications to the loaded image.

###License

MIT License

