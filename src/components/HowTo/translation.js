import React from "react";

import {
  LANGUAGE_US,
  LANGUAGE_RUS,
} from "../../consts";

const translation = {
  [LANGUAGE_US]: {
    ["title"]: "How can i buy beats here?",
    ["content"]: (classes) => <div className={classes.content}>
      <p>All beats uploaded on this website are only demonstrational materials. If you want use it (commercial or non-commercial), you have to make a purchase</p>
      <p>The purchasing is fully-automated. It can be divided into the following stages:</p>
      <ol>
        <li>Beat selection</li>
        <li>Payment method selection (Visa, Maestro, Webmoney, Paypal, etc.)</li>
        <li>Payment approving</li>
        <li>Downloading the full version</li>
      </ol>
      <p>The links for download also will be sended on your E-mail address.</p>
      <p>If you have some problems with purchasing, you may contact me in social networks or <b>beatzhitta@gmail.com</b></p>
      <br />
      <h2>Which options should I choose?</h2>
      <p>Your choice must be based on how would you use it. Choose wisely</p>
      <h3>Basic Lease</h3>
      <ul>
        <li>After purchase you'll get 1 wav-formatted audio file</li>
        <li>You can use it with your mixtapes, albums, singles</li>
        <li>Beat still will be available for purchase</li>
        <li>In the title of the track you must specify [prod. Hitta On Tha Trakk]. </li>
        <li>The rights still belongs to the creator.</li>
      </ul>
      <h3>Premium Lease</h3>
      <ul>
        <li>After purchase you'll get several wav-formatted audio files (trackout)</li>
        <li>You can use it with your mixtapes, albums, singles</li>
        <li>Beat still will be available for purchase</li>
        <li>In the title of the track you must specify [prod. Hitta On Tha Trakk]. </li>
        <li>The rights still belongs to the creator.</li>
      </ul>
      <h3>Exclusive Rights</h3>
      <ul>
        <li>After purchase you'll get several wav-formatted audio files (trackout)</li>
        <li>You can use it with your mixtapes, albums, singles</li>
        <li>Beat will be deleted from website and other platforms</li>
        <li>In the title of the track you must specify [prod. Hitta On Tha Trakk]. </li>
        <li>The rights still belongs to the creator.</li>
      </ul>
    </div>,
  },
  [LANGUAGE_RUS]: {
    ["title"]: "Как я могу приобрести биты?",
    ["content"]: (classes) => <div className={classes.content}>
      <p>Все биты, которые вы можете прослушать на данном сайте, являются лишь демонстрационными материалами. Чтобы получить полную версию и права для использования, вам необходимо совершить покупку</p>
      <p>Покупка бита происходит в автоматическом режиме. Процесс покупки можно разделить на следующие этапы:</p>
      <ol>
        <li>Выбор бита/битов и опций заказа</li>
        <li>Выбор метода оплаты (Банковская карта, электронные кошельки, мобильный платёж и т.д.)</li>
        <li>Подтверждение оплаты</li>
        <li>Скачивание полной версии бита (с учетом выбранных опций)</li>
      </ol>
      <p>Ссылки на загрузку купленного бита (битов) будут автоматически продублированы вам на E-mail адрес, а также сохранены в ваших Cookie-файлах</p>
      <p>При возникновении проблем с процессом, вы всегда можете связаться со мной через социальные сети или обратившись по адресу <b>beatzhitta@gmail.com</b></p>
      <br />
      <h2>Какой вариант покупки мне выбрать?</h2>
      <p>Каждый вариант покупки обладает своими свойствами. Пожалуйста, не забывайте выбирать опции необходимые вам!</p>
      <h3>Базовая аренда</h3>
      <ul>
        <li>После оплаты вы получаете бит в формате Wav, с 1 тэгом в начале.</li>
        <li>Бит можно использовать для выступлений, микстейпов, альбомов, баттлов и т.д.</li>
        <li>Бит остается в продаже.</li>
        <li>В названии опубликованного вами трека должен быть написан тег prod. Hitta On Tha Trakk. </li>
        <li>Права на бит по прежнему остаются за создателем.</li>
      </ul>
      <h3>Премиум аренда</h3>
      <ul>
        <li>После оплаты вы получаете бит разбитый по дорожкам (трекаут) в формате Wav, с 1 тэгом в начале.</li>
        <li>Бит можно использовать для выступлений, микстейпов, альбомов, баттлов и т.д.</li>
        <li>Бит остается в продаже.</li>
        <li>В названии опубликованного вами трека должен быть написан тег prod. Hitta On Tha Trakk. </li>
        <li>Права на бит по прежнему остаются за создателем.</li>
      </ul>
      <h3>Эклюзивные права на использование</h3>
      <ul>
        <li>После оплаты вы получаете бит разбитый по дорожкам (трекаут) в формате Wav, с 1 тэгом в начале.</li>
        <li>Бит можно использовать для выступлений, микстейпов, альбомов, баттлов и т.д.</li>
        <li>Бит будет снят с продажи.</li>
        <li>В названии опубликованного вами трека должен быть написан тег prod. Hitta On Tha Trakk. </li>
        <li>Права на бит по прежнему остаются за создателем.</li>
      </ul>
    </div>,
  }
};

export default translation;