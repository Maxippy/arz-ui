<template>
  <div class="card">
    <div class="card-content">
      <h3 class="card-title animated-bg animated-bg-text" id="title">
        <p class="card-excerpt" id="excerpt">&nbsp;
          <span class="animated-bg animated-bg-text">&nbsp;</span>
          <span class="animated-bg animated-bg-text">&nbsp;</span>
          <span class="animated-bg animated-bg-text">&nbsp;</span>
        </p>
        <!-- <div class="author">
          <div class="profile-img animated-bg" id="profile_img">&nbsp;</div>
          <div class="author-info">
            <strong class="animated-bg animated-bg-text" id="name">&nbsp;</strong>
            <small class="animated-bg animated-bg-text" id="date">&nbsp;</small>
          </div>
        </div> -->
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'aSkeleton'
}
</script>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
  .card-content {
    background-color: #fff;
    padding: 30px;
    .card-title {
      height: 20px;
      margin: 0;
      .card-excerpt {
        color: #777;
        margin: 10px 0 20px;
        span {
          margin: 5px 0;
          height: 10px;
        }
      }
    }
  }
}
.animated-bg {
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated-bg-text {
  border-radius: 50px;
  display: inline-block;
  margin: 0;
  height: 10%;
  width: 100%;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
</style>
