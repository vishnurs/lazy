lazy
====

lazy.js, A standalone javascript library to lazy load images

Lazy load your images using html5 data attribute.

Just add data-lazy attibute to the image tag which needs to be loaded lazily.

```HTML
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

####.init()

It takes two options

##### delay
Type: Number Default: 0

You can specify the number of seconds you want to delay to load the images.

##### callback
Type: Function

A callback function to which the element which has been updated will be passed as an argument. You can use this to
make any modifications to the loaded image.

###License

MIT License

