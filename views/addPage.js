const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
  <label for="author" class="col-sm-2 control-label">Author</label>
    <div class="col-sm-10">
    <input id="author" name="author" type="text" class="form-control"/></div>


    <label for="authorEmail" class="col-sm-2 control-label">Author Email</label>
    <div class ="col-sm-10">
    <input id="authorEmail" name="authorEmail" type="text" class="form-control"/></div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="page-content" class="col-sm-2 control-label">Page Content</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="page-status">
      <label for="page-status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
    <p></p>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
