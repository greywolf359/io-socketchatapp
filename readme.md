project uses webpack-dev server

project is for practice in:
- setting up webpack,
- review of reactjs
- practice with socket io
- practice with nodejs process object


Trouble spot 1 - getting babel to read jsx
- solution was to create the babelrc and use "transform-react-jsx"

-Trouble spot 2: getting react-router 4 to work:
- solution was to put the routes into the component you want them to render in

Trouble spot 2:  getting the path to go to the appropriaate component when typed into the url locator 
- solution was to use hashHistory but i dont know if that is proper. 

Trouble spot 4: remembering how to setState in an ES6 syntax component
- solution this.setState = {messages: []} and NOT this.state.message = []

Trouble spot 5: its componentDidMount NOT componentHasMounted

Trouble spot 6: getting data from a textfield and calling the handling method to send it to the parent component
- solution was to nest the method call in an arrow function and pass event object as an arg to arrow function

So far it has worked.  This is my second project without a course or instructor to guide me.  The time it took to get it finished was about 4 to 5 days although I'm sure a pro could do way better.  I found myself pretty much doing trial and error and consulting the documentation for the technologies used.  
