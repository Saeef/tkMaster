# ticketmaster  :rocket:

### background  :bell:
- Low stock levels were a cause of frustration     
- users commented on the high levels of out of stocks. This could force users to shop elsewhere     

### objective :book:
Adding a shop by size filter to appear as a sticky footer on the product listing page prompts the user    
to select their sizes earlier in the journey to avoid viewing products not in their size.    

### design changes: ** dom injected - javascript **   :pencil:
- add size filter popup on the bottom towards right of screen
- list sizes vertically across 3 columns
- when user has selected a size display a tick in the size box
- when popup is closed use - in top right hand corner to close
- when popup is close user + in top right hand corner to open
- before user has selected a size display text "Select several sizes to broaden your choices"
#### considerations  :watch: 
- same functionality as 'refine by size' filter on right hand navigation.
- results page auto update once user has selected a size
- sticky in its position on the screen
- when user land on any of listed URL's display open popup
- if user closes the popup and then moves onto another listed URL keep it closed
- when user selects a size then moves onto another listed URL display popup with unselected sizes once    
  again. Don't carry forward sizes across categories.

### var <kbd>One</kbd>
<kbd>desktop</kbd>
- remove toggle
- seatmap be default
- cannot view best avail version
<kbd>mobile</kbd>
- remove find seats button
- ***buy on map*** same functionality

### var <kbd>Two</kbd>
<kbd>desktop n mobile</kbd>
- Find Seats For Me cta
- Buy on Map cta

### var <kbd>Three</kbd>
<kbd>desktop n mobile</kbd>
- Select Your Own
- Best Available

### var <kbd>Four</kbd>
<kbd>desktop n mobile</kbd>
- Find Seats For Me (text link)
- Buy on Map (text link)

### var <kbd>Five</kbd>
<kbd>desktop</kbd>
- Select Your Own (text link)
- Best Available (text link)


### notes
- I need translations for Germany and Finland
- Var 4 & 5 Only desktop text links (doesn't make sense to have text links on mobile ?)







<kbd>initState function</kbd> :rocket:        
![](/images/iniStatefn.png) 


<kbd>pairing function</kbd> :rocket:          
![](/images/pairingfn.png) 



<kbd>troubled board if none selected</kbd>  :rocket:      
![](/images/noneselectedTB.png)
 
 
 <kbd>control image</kbd> :rocket:       
 ![](/images/whiteStuff.png)
