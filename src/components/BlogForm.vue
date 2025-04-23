<script setup>

</script>


<template>
  <div class="row">
    <div class="col-md-6">
      <form class="rounded p-2">
        <div class="mb-3">
          <label for="blogTitle" class="form-label">Title</label>
          <input type="text" class="form-control" id="blogTitle" name="blogTitle" required minlength="1"
            maxlength="100">
        </div>
        <div class="mb-3">
          <label for="blogUrl" class="form-label">Image URL here</label>
          <input type="url" class="form-control" id="blogUrl" name="blogUrl" maxlength="500">
        </div>
        <div class="mb-3">
          <label for="blogBody" class="form-label">Body</label>
          <textarea type="text" class="form-control" id="blogBody" name="blogBody" maxlength="10000"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>
input {
  outline: solid 1px #4712ED, ;
}

textarea {
  outline: solid 1px #4712ED, ;
}

button {
  border-color: #B8ED12;
  background-color: #B8ED12;
}

form {
  background-color: rgba(128, 128, 128, 0.531);
}

.form-control {
  background-color: rgba(128, 128, 128, 0.531);
}
</style>