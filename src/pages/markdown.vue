<template>
  <div>
    <div class="title">
      <el-input v-model="title" placeholder="php是世界上最好的语言"></el-input>
    </div>
    <div class="edit-state">
      <div class="markdown">
        <textarea :value="input" @input="update"></textarea>
      </div>
      <div class="showState" v-if="compiledMarkdown" v-html="compiledMarkdown" v-highlight></div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import marked from 'marked'

  export default {
    data() {
      return {
        title: '',
        input: '# hello',
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.input = e.target.value
      }, 300)
    },
    computed: {
      compiledMarkdown: function () {
        console.log(marked(this.input, {sanitize: true}))
        return marked(this.input, {sanitize: true})
      }
    },
  }
</script>
<style lang="scss" scoped>
  .edit-state {
    position: absolute;
    top: 50px;
    bottom: 100px;
    display: flex;
    margin: 10px 0 0 0;
    border-radius: 3px;
    width: 100%;
    .markdown {
      flex: 1;
      border: 1px solid rgb(191, 203, 217);
      border-right: none;
      textarea {
        height: 90%;
        width: 100%;
        font-size: 20px;
        outline: none;
        border: none;
        resize: none;
        border-radius: 3px;
      }
    }
    .showState {
      flex: 1;
      border: 1px solid rgb(191, 203, 217);
      background: rgba(191, 203, 217, .1);
    }
  }
</style>
