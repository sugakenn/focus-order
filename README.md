# focus-order
 Focus moves when the enter key is pressed in browser.
![image](https://github.com/sugakenn/focus-order/blob/main/image.jpg)

## Usage
- Modify your html source
  - Please give a class of your favorite name to the element you want to move the focus with the enter key.
  
    &lt;input type="text" class="favorite-class-name"&gt;
    
  - Set forcus order for attribute of data-order.
    
    &lt;input type="text" class="favorite-class-name" data-order="3"&gt;
    
    - Setting -1 to data-order will ignore the element.
    - Set Integer.SafeMax if the data-order does not exist.
    
  - import focus-order.js in browser
  
    &lt;script src="./focus-order.js"&gt;
    
    (or copy code in script tag.)
    
- Create FocusOrder instance with selector.

  If class name is "inputs" like this.

  &lt;script&gt;
    new FocusOrder('.inputs');
  &lt;/script&gt;

## Mark up Sample
<pre>
&lt;div class="wrapper"&gt;
  &lt;p class="title"&gt;sample&lt;/p&gt;
  &lt;p&gt;&lt;label&gt;Last name&nbsp;&lt;input class="inputs" type="text" name="lastname" /&gt;&lt;/label&gt;&lt;/p&gt;
  &lt;p&gt;&lt;label&gt;First name&nbsp;&lt;input class="inputs" type="text" name="firstname" data-order="99" /&gt;&lt;/label&gt;&lt;/p&gt;
  &lt;p&gt;&lt;label&gt;Plan&nbsp;&lt;select class="inputs" name="plan"&gt;
  &lt;option value="A"&gt;PLAN-A&lt;/option&gt;
  &lt;option value="B"&gt;PLAN-B&lt;/option&gt;
  &lt;/select&gt;&lt;/label&gt;&lt;/p&gt;
  &lt;p&gt;Time&lt;br&gt;
  &lt;label&gt;&lt;input class="inputs" type="radio" name="hour" value="15"&gt;15:00～&lt;/label&gt;&lt;br&gt;&lt;label&gt;
  &lt;input class="inputs" type="radio" name="hour" value="18" data-order="-1"&gt;18:00～&lt;/label&gt;&lt;/p&gt;
  &lt;p&gt;&lt;label&gt;I agree.&lt;input class="inputs" type="checkbox"&gt;&lt;/label&gt;&lt;/p&gt;
  &lt;button class="inputs"&gt;Send&lt;/button&gt;
  &lt;div&gt;Optional Comment&lt;br&gt;&lt;textarea class="inputs" name="memo" rows="5" cols="30" data-order="100"&gt;Here, pressing the enter key moves the focus.And when you press the alt+enter key, a line break will be added&lt;/textarea&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
    

