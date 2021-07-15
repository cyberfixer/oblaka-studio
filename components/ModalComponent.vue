<template>
  <div class="modal">
    <div class="inner container">
      <button class="btn-close" @click="$store.commit('modalClose')" />
      <template v-if="content === 'description'">
        <h1 class="desc">Новенькая в бизнесе?</h1>
        <ul class="ul">
          <li v-for="item in workDescList" :key="item">{{ item }}</li>
        </ul>
        <button
          class="btn btn-pinktoorange"
          @click="$store.dispatch('openModal', 'request')"
        >
          записаться на встречу
        </button>
      </template>
      <form v-if="content === 'request'">
        <h1 class="modal-request">Привет)</h1>
        <input
          ref="name"
          v-model="name"
          type="text"
          placeholder="Как тебя зовут?"
        />
        <input
          ref="contact"
          v-model="contact"
          type="text"
          placeholder="Телефон, почта или telegram"
        />
        <textarea
          v-model="text"
          placeholder="Примечание и удобные дни для встречи"
        />
        <p>Как с тобой лучше связаться?</p>
        <div class="contacts">
          <input
            id="tel"
            type="radio"
            name="contact"
            @click="contactType = 'Звонок'"
          />
          <label for="tel">Звонок</label>
          <input
            id="viber"
            type="radio"
            name="contact"
            @click="contactType = 'Viber'"
          />
          <label for="viber">Viber</label>
          <input
            id="whatsapp"
            type="radio"
            name="contact"
            @click="contactType = 'WhatsApp'"
          />
          <label for="whatsapp">WhatsApp</label>
          <input
            id="telegram"
            type="radio"
            name="contact"
            @click="contactType = 'Telegram'"
          />
          <label for="telegram">Telegram</label>
        </div>

        <button class="btn btn-pinktoorange" @click.prevent="send">
          отправить
        </button>
        <p class="privacy">
          Нажимая на кнопку “Отправить”, ты даешь согласие на обработку
          персональных даных
        </p>

        <a href="tel:+79774269778" class="tel">+7 977 426 97 78</a>
        <div class="social">
          <a href="https://wa.me/+79774269778" target="_blank">
            <img src="@/assets/img/svg/i-whatsapp.svg" alt="whatsapp" />
          </a>
          <a href="https://telegram.im/@oblkstd" target="_blank">
            <img src="@/assets/img/svg/i-telegramm.svg" alt="telegramm" />
          </a>
          <a href="https://vk.com" target="_blank">
            <img src="@/assets/img/svg/i-vk.svg" alt="vk" />
          </a>
        </div>
      </form>
      <div v-if="content === 'success'" class="success">
        <h1>Спасибо! Скоро мы с тобой свяжемся!</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWorkDescription',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      workDescList: null,
      name: null,
      contact: null,
      text: '',
      contactType: '',
    }
  },
  async fetch() {
    this.workDescList = await this.$content('lists')
      .fetch()
      .then((r) => r.workDescList)
  },
  methods: {
    send() {
      this.$refs.name.classList.remove('invalid')
      this.$refs.contact.classList.remove('invalid')
      if (this.name && this.contact) {
        const base =
          'https://api.telegram.org/bot1872106187:AAEwdULttMakbcuTo84gp32PdrOJxShAIhQ/'
        const chatId = 339466081 // 944672447
        fetch(
          `${base}sendMessage?chat_id=${chatId}&text=Имя: ${this.name}%0AКонтакт: ${this.contact}%0AСообщение: ${this.text}%0AПредпочтительный способ связи: ${this.contactType}`,
          { mode: 'no-cors', credentials: 'omit' }
        ).then(this.$store.dispatch('openModal', 'success'))
      } else {
        if (!this.name) this.$refs.name.classList.add('invalid')
        if (!this.contact) this.$refs.contact.classList.add('invalid')
      }
    },
  },
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  .inner {
    width: 375px;
    height: max-content;
    background-color: white;
    box-shadow: 0px 4px 50px rgba(0, 102, 255, 0.1);
    border-radius: 30px;
    padding: 32px 32px 40px;
    position: relative;
    align-content: flex-start;
    z-index: 1;
    .btn-close {
      position: absolute;
      width: 52px;
      height: 52px;
      top: 8px;
      right: 8px;
      background-image: url('@/assets/img/svg/modal-cross.svg');
      background-repeat: no-repeat;
      background-size: 18px;
      background-position: center;
      z-index: 2;
    }
    h1 {
      font-family: 'Adobe Clean Bold';
      font-size: 23px;
      margin-bottom: 46px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 5%;
        top: 25%;
        width: 206px;
        height: 37px;
        z-index: -1;
        background-size: cover;
        background-repeat: no-repeat;
      }
      &.desc:before {
        background-image: url('@/assets/img/svg/h2-modal-work-desc.svg');
      }
      &.modal-request {
        text-align: center;
      }
      &.modal-request:before {
        left: 25%;
        width: 156px;
        height: 43px;
        background-image: url('@/assets/img/svg/h2-modal-request.svg');
      }
    }
    .ul li:before {
      background-color: var(--pink);
    }
    form {
      width: 100%;
      text-align: center;
      .invalid {
        border: 2px solid red;
      }
      input,
      textarea {
        width: inherit;
        border: 2px solid #e2e9f3;
        border-radius: 10px;
        padding: 12px 16px;
        font-family: 'Source Sans Pro Regular';
        font-size: 17px;
        color: #597591;
        margin-bottom: 24px;
      }
      input {
        &[type='radio'] {
          display: none;
          & + label {
            padding: 4px 6px;
          }
          &:checked + label {
            color: white;
            background-color: #626a7c;
            border-radius: 6px;
          }
        }
      }
      textarea {
        resize: none;
        min-height: 94px;
        height: max-content;
      }
      p {
        color: #597590;
      }
      .contacts {
        display: flex;
        justify-content: space-between;
        border: 2px solid #e2e9f3;
        border-radius: 10px;
        padding: 10px 6px;
        margin: 12px 0 32px;
        color: #597590;
      }
    }
    .success {
      height: 212px;
      display: grid;
      place-content: center;
      h1 {
        margin: 0;
        text-align: center;
        &:before {
          top: 0;
          left: 10%;
          width: 240px;
          height: 66px;
          background-image: url('@/assets/img/svg/h2-modal-success.svg');
        }
      }
    }
    .tel {
      font-family: 'Adobe Clean Bold';
      font-size: 21px;
    }

    .privacy {
      margin: 24px auto 72px;
    }

    .social {
      margin: 32px auto 0;
      width: 214px;
      display: flex;
      justify-content: space-between;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .modal .inner {
    form {
      .contacts {
        padding: 10px 2px;
      }
      input {
        &[type='radio'] {
          & + label {
            padding: 4px 6px;
          }
        }
      }
    }
  }
}
</style>
