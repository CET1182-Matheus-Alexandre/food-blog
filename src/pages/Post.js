import React, { Component } from 'react';
import PostPage from '../layout/post';
import PostContainer from '../components/PostContainer';
import PostText from '../components/PostText';
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';

export default class Post extends Component {
  render() {
    const { postId } = this.props;
    return (
      <PostPage
        pageTitle={`Shared Food - ${postId}`}
        title={`Post ${postId}`}
        subtitle="is the one that you share"
        photo={{
          src: 'assets/images/burguer.jpg',
          authorName: 'rawpixel'
        }}
        rootPath="../"
      >
        <PostContainer>
          <PostText
            post={{
              postLink: `/post/${postId}`,
              postTitle:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorLink: 'https://twitter.com/pedr3cal',
              authorName: 'Alexandre Pedrecal',
              dateTime: '2018-08-19 16:05'
            }}
          >
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num
              copo é motivis de denguis. Paisis, filhis, espiritis santis. Copo
              furadis é disculpa de bebadis, arcu quam euismod magna. Nullam
              volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non
              consequat odio.
            </p>
            <p>
              Leite de capivaris, leite de mula manquis sem cabeça. Mauris nec
              dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae
              iaculis nisl. In elementis mé pra quem é amistosis quis leo. Per
              aumento de cachacis, eu reclamis.
            </p>
            <table>
              <thead>
                <tr>
                  <th colSpan="3">Valores Nutricionais</th>
                </tr>
                <tr>
                  <th>Nutrientes</th>
                  <th>Quantidade</th>
                  <th>VD %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calorias</td>
                  <td>502 kcal</td>
                  <td>25 %</td>
                </tr>
                <tr>
                  <td>Carboidratos</td>
                  <td>45 g</td>
                  <td>15 %</td>
                </tr>
                <tr>
                  <td>Sódio</td>
                  <td>1047 g</td>
                  <td>44 %</td>
                </tr>
                <tr>
                  <td>Proteínas</td>
                  <td>27 g</td>
                  <td>36 %</td>
                </tr>
                <tr>
                  <td>Lipídios</td>
                  <td>25 g</td>
                  <td>45 %</td>
                </tr>
              </tbody>
            </table>
            <p>
              Mé faiz elementum girarzis, nisi eros vermeio. Tá deprimidis, eu
              conheço uma cachacis que pode alegrar sua vidis. Sapien in monti
              palavris qui num significa nadis i pareci latim. Quem manda na
              minha terra sou euzis!
            </p>
            <p>
              Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis,
              aguis e fermentis. A ordem dos tratores não altera o pão duris.
              Aenean aliquam molestie leo, vitae iaculis nisl. Praesent
              malesuada urna nisi, quis volutpat erat hendrerit non. Nam
              vulputate dapibus.
            </p>
          </PostText>
        </PostContainer>

        <CardContainer title="Últimos posts">
          <Card
            lastPost={{
              postLink: '/post/01',
              imageLink: '../assets/images/burguer.jpg',
              imageDescription: 'A delicious burguer',
              authorName: 'Alexandre Pedrecal',
              authorLink: 'https://twitter.com/pedr3cal',
              dateTime: '2018-08-19 16:05',
              postTitle:
                'Lorem ipsum dolor sit amet, consectetur adipiscin elit.'
            }}
          />
          <Card
            lastPost={{
              postLink: '/post/02',
              imageLink: '../assets/images/burguer.jpg',
              imageDescription: 'A delicious burguer',
              authorName: 'Alexandre Pedrecal',
              authorLink: 'https://twitter.com/pedr3cal',
              dateTime: '2018-08-19 16:05',
              postTitle: 'Titulo da Postagem'
            }}
          />
          <Card
            lastPost={{
              postLink: '/post/03',
              imageLink: '../assets/images/burguer.jpg',
              imageDescription: 'A delicious burguer',
              authorName: 'Alexandre Pedrecal',
              authorLink: 'https://twitter.com/pedr3cal',
              dateTime: '2018-08-19 16:05',
              postTitle: 'Titulo da Postagem'
            }}
          />
        </CardContainer>
      </PostPage>
    );
  }
}
