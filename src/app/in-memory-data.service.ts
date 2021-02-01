import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
//Extra imports.
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Incredible Concrete Sausages',
        description: 'Consectetur quia nulla suscipit asperiores quidem et. Repellat praesentium ea omnis facere laudantium delectus reiciendis ratione. Ut voluptatem nisi quia.',
        price: '619.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 53165
      },
      {
        id: 2,
        name: 'Refined Granite Tuna',
        description: 'Tempora officiis aperiam possimus sunt ut at occaecati vel. Doloribus laboriosam ipsum. Soluta dolorem qui quasi magni aut. Quo ea delectus saepe est libero. Iure est odio et occaecati. Dolores officiis assumenda aspernatur ut.',
        price: '395.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 25401
      },
      {
        id: 3,
        name: 'Sleek Concrete Mouse',
        description: 'Eum at nihil facere est doloremque inventore ea. Accusamus soluta voluptate ratione animi voluptatem quia. Numquam deserunt laboriosam suscipit qui perferendis similique eveniet enim.',
        price: '733.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 98811
      },
      {
        id: 4,
        name: 'Refined Metal Gloves',
        description: 'Itaque non maxime eum est ut laboriosam nam recusandae nulla. Earum optio deserunt dolorum et sed corrupti culpa. Ut dolore sapiente voluptate ipsum autem ullam distinctio aut quibusdam. Ut consequatur quidem possimus iusto suscipit voluptatem nobis.',
        price: '104.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 66274
      },
      {
        id: 5,
        name: 'Rustic Soft Ball',
        description: 'Aut aspernatur voluptatem dolore aut et occaecati assumenda nobis fugiat. Dolores impedit ullam molestiae quas maxime alias sint a voluptates. Ut ut dolores eaque ut doloremque ut. Ratione nemo suscipit. Tenetur nam magnam sunt minus veniam porro voluptatem quos.',
        price: '987.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 40481
      },
      {
        id: 6,
        name: 'Rustic Wooden Car',
        description: 'Libero perferendis sit nihil ducimus. Atque aspernatur iusto aliquam eligendi.',
        price: '411.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 36637
      },
      {
        id: 7,
        name: 'Unbranded Metal Shoes',
        description: 'Nemo quod similique consequuntur. Placeat quisquam impedit rerum at sed. Quam consequuntur ex deleniti placeat impedit assumenda minus ut aut. Eos alias porro libero consequatur eum neque.',
        price: '442.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 94633
      },
      {
        id: 8,
        name: 'Fantastic Steel Car',
        description: 'Sed aliquam voluptatem quasi enim. Voluptate hic esse aut aliquid vel. Quaerat doloribus modi qui repellendus. Sapiente ratione amet quibusdam omnis.',
        price: '594.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 9767
      },
      {
        id: 9,
        name: 'Rustic Frozen Ball',
        description: 'Ea et omnis natus et. Amet aliquam est facilis praesentium laboriosam ut. Officia iusto labore dicta ut magni officiis nihil occaecati. Odit dolores adipisci provident iste delectus ut dolore.',
        price: '328.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 85470
      },
      {
        id: 10,
        name: 'Rustic Wooden Hat',
        description: 'Consequatur tempora totam illo inventore amet. Officiis excepturi voluptatem nesciunt vitae et perspiciatis laborum a. Consectetur nihil sit saepe ut tempora qui excepturi. Accusantium quisquam et.',
        price: '391.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 9258
      },
      {
        id: 11,
        name: 'Gorgeous Concrete Car',
        description: 'Qui possimus voluptates. Sed exercitationem est eveniet aut tempora. Aut tenetur qui itaque. Consequatur sit autem consequatur enim quibusdam ipsa eum. Laboriosam est perferendis ipsum dignissimos sint sapiente.',
        price: '411.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 20868
      },
      {
        id: 12,
        name: 'Tasty Cotton Hat',
        description: 'Suscipit ducimus est doloremque. Sit unde autem consequatur sit. Corporis voluptatem distinctio accusantium.',
        price: '90.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 93876
      },
      {
        id: 13,
        name: 'Gorgeous Metal Tuna',
        description: 'Vel non nobis facilis. Et autem magnam provident rem maiores repudiandae dolorem temporibus dolorem. Rem iusto et repudiandae cupiditate nihil voluptates voluptatem. Nihil ea optio nisi molestiae nobis fugit incidunt. Vel nostrum cupiditate veniam enim esse. Cumque et eum veniam ut debitis amet dolores.',
        price: '373.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 29286
      },
      {
        id: 14,
        name: 'Licensed Rubber Keyboard',
        description: 'Vel ea numquam. Modi esse quam architecto ut perferendis. Delectus et ad amet quo laborum.',
        price: '854.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 88238
      },
      {
        id: 15,
        name: 'Incredible Frozen Soap',
        description: 'Mollitia doloremque reiciendis repellendus in rerum ea. Soluta rerum voluptatum sit delectus iusto explicabo dolor soluta perspiciatis. Ea odit quis necessitatibus.',
        price: '722.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 10642
      },
      {
        id: 16,
        name: 'Handmade Granite Soap',
        description: 'Quisquam qui qui natus recusandae ea amet voluptates. Ipsum quia aut alias nihil voluptatum.',
        price: '913.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 5639
      },
      {
        id: 17,
        name: 'Handmade Frozen Soap',
        description: 'Asperiores quaerat vero ea quaerat eum fugit et excepturi et. Deserunt neque dolorem natus consequuntur atque et sunt quis. Magni atque voluptatem eum. Cumque voluptate maiores quia tempora ut. Autem consectetur pariatur. Et quo ipsam.',
        price: '979.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 88509
      },
      {
        id: 18,
        name: 'Tasty Fresh Mouse',
        description: 'Eveniet magnam consectetur tenetur labore ad est. Molestiae aut quis eius illo consequuntur aliquid. Voluptatem quibusdam est molestiae libero. Debitis autem quia.',
        price: '397.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 5594
      },
      {
        id: 19,
        name: 'Rustic Fresh Sausages',
        description: 'Natus optio quo aut et. Odio accusamus provident et libero eos sapiente.',
        price: '173.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 78347
      },
      {
        id: 20,
        name: 'Incredible Metal Sausages',
        description: 'Et quia autem error sit. Dolores et distinctio et nihil rerum. Sit optio incidunt ea ratione accusamus aliquid atque.',
        price: '64.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 19031
      },
      {
        id: 21,
        name: 'Unbranded Frozen Tuna',
        description: 'Necessitatibus ratione atque. Animi vero exercitationem assumenda provident et illo dolorem. Cupiditate ad ut qui occaecati autem molestias labore. Molestiae sed natus. Sed ad consequatur id. Dolorem quia ea.',
        price: '735.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 46863
      },
      {
        id: 22,
        name: 'Practical Rubber Chips',
        description: 'Repellat iste voluptatibus quis sint quibusdam est fugit earum. Corporis sit amet nam nesciunt possimus laborum qui ut. Debitis sint fuga placeat. Qui fuga hic distinctio molestias. In numquam labore aut accusamus ipsum magnam iusto architecto ullam. Ipsam consectetur quia repellendus soluta aut.',
        price: '818.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 39441
      },
      {
        id: 23,
        name: 'Intelligent Rubber Car',
        description: 'Fugiat id iure nam dolorum beatae. Est ea dolorum laborum sint. Libero est ratione aut amet doloremque. Quis doloribus earum et omnis tempore quaerat rerum voluptatum dolorem.',
        price: '695.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 59871
      },
      {
        id: 24,
        name: 'Ergonomic Fresh Pants',
        description: 'Dolorem rerum nihil voluptas odio voluptas dolorem. Autem sed explicabo in praesentium ullam et fugit reiciendis. Labore qui autem ipsa exercitationem. Fugit et qui officia. Eum aut in.',
        price: '170.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 13051
      },
      {
        id: 25,
        name: 'Rustic Cotton Shoes',
        description: 'Voluptates praesentium velit qui dolorum quos sit. Voluptatem et in reiciendis incidunt occaecati dolorum ut qui.',
        price: '951.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 28928
      },
      {
        id: 26,
        name: 'Sleek Steel Cheese',
        description: 'Quaerat molestiae unde sit. Rem et consequatur vel minima perspiciatis animi minus illo consequuntur. Vel fugiat exercitationem enim quos maxime aut tempore. Expedita velit consequatur quia debitis in et. Reiciendis deserunt ut. Minus assumenda molestias similique adipisci in iste aliquam et ut.',
        price: '562.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 48327
      },
      {
        id: 27,
        name: 'Incredible Wooden Bacon',
        description: 'Et qui pariatur explicabo. Dolores atque quas voluptas temporibus quo dolor harum non fuga.',
        price: '862.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 75003
      },
      {
        id: 28,
        name: 'Incredible Plastic Tuna',
        description: 'Natus impedit quasi ipsa voluptas cumque neque. Ut odit et sapiente sit aut enim. Quia nobis aut reiciendis. Esse numquam tempora neque eaque facilis nobis deleniti et. Illum sint a necessitatibus consequatur doloremque vel. Culpa in sed autem autem quis repudiandae qui magni.',
        price: '412.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 3788
      },
      {
        id: 29,
        name: 'Generic Plastic Salad',
        description: 'Consectetur vel officiis. Quis facere laudantium placeat quia. Corrupti tempora est id necessitatibus et illum fugiat voluptates vel. Quos voluptas et nam eligendi sint quod repellendus ut aut. Ab corporis aliquam voluptas temporibus rerum deserunt aut. At qui dolor ad ut illum qui ipsam.',
        price: '785.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 8042
      },
      {
        id: 30,
        name: 'Awesome Plastic Chicken',
        description: 'Ut totam labore ex et facere consequatur. Est voluptatum reiciendis ipsam est iusto deserunt qui tempore placeat. Consequuntur in ab odio voluptates est. Enim sequi error enim est illum tempore minus. Eligendi sed atque cumque eligendi quasi modi vitae id. Ad ut autem unde maiores autem qui nostrum perspiciatis ipsa.',
        price: '244.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 84570
      },
      {
        id: 31,
        name: 'Sleek Metal Car',
        description: 'Quasi amet sit voluptate saepe. Et ea sed vel magnam hic. Rerum dolor aut temporibus temporibus aut vero sed. Sunt excepturi quia odit molestiae praesentium vel.',
        price: '920.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 29830
      },
      {
        id: 32,
        name: 'Licensed Soft Cheese',
        description: 'Quia distinctio repudiandae in voluptatem pariatur necessitatibus earum repudiandae neque. Ad qui enim velit esse unde fuga.',
        price: '93.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 54483
      },
      {
        id: 33,
        name: 'Fantastic Steel Computer',
        description: 'Eius aut deserunt voluptatem molestiae quaerat odit sunt magnam omnis. Natus qui eos sed voluptatibus maiores non provident nemo sunt.',
        price: '314.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 19878
      },
      {
        id: 34,
        name: 'Tasty Granite Chicken',
        description: 'Ducimus illo eum iure. Culpa est dolore in aut est dolor sapiente omnis laudantium. Fuga quibusdam dolores eum odit ducimus neque.',
        price: '786.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 2316
      },
      {
        id: 35,
        name: 'Licensed Cotton Chair',
        description: 'Dolor quisquam et facere. Ipsum autem voluptatem voluptatum eveniet ducimus nihil quibusdam. Temporibus enim et.',
        price: '516.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 49426
      },
      {
        id: 36,
        name: 'Handcrafted Rubber Pizza',
        description: 'Dignissimos quo omnis. Ea delectus quo quis culpa veritatis molestiae qui officia error. Accusamus unde repudiandae. Ea aliquid a dolores hic quo.',
        price: '267.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 33696
      },
      {
        id: 37,
        name: 'Fantastic Concrete Car',
        description: 'Ea enim fugit voluptas reprehenderit quas ut. Laboriosam iste autem velit sint. Recusandae distinctio et. Numquam consequatur aut in aspernatur vel magni doloremque.',
        price: '835.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 35076
      },
      {
        id: 38,
        name: 'Tasty Granite Fish',
        description: 'Neque blanditiis eligendi ut necessitatibus facere quia voluptatum aspernatur. Sit ut eos porro laborum nesciunt tempora. Dolorem aliquid atque et. Exercitationem esse in quia eveniet.',
        price: '598.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 3612
      },
      {
        id: 39,
        name: 'Handmade Granite Sausages',
        description: 'Hic aut doloribus quod quas quo dolor repellat. Placeat sunt occaecati minima laboriosam.',
        price: '707.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 64283
      },
      {
        id: 40,
        name: 'Tasty Concrete Shoes',
        description: 'Quidem quae minima. Excepturi voluptas sit fugiat repellendus aspernatur beatae et et libero.',
        price: '889.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 97890
      },
      {
        id: 41,
        name: 'Unbranded Plastic Fish',
        description: 'Et aut voluptas qui dolorum maxime. Cum illum facere eveniet qui qui rerum reprehenderit aut ex. Et sit officiis veniam modi cupiditate.',
        price: '631.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 98808
      },
      {
        id: 42,
        name: 'Awesome Rubber Soap',
        description: 'Sunt molestiae velit. Exercitationem dolor dolor qui fugit aperiam neque cumque vitae praesentium. Perspiciatis in velit nulla. Aut aperiam totam quam ut qui dolores. Occaecati quia eius. Dolor magni mollitia libero modi eos occaecati.',
        price: '794.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 38789
      },
      {
        id: 43,
        name: 'Ergonomic Granite Ball',
        description: 'Qui velit blanditiis eum perspiciatis adipisci repellendus labore. Qui aspernatur voluptatibus sed nesciunt et quod assumenda quo velit. Dolore voluptas ab dolorem quia. Ut voluptas magnam. Amet autem quia.',
        price: '688.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 96999
      },
      {
        id: 44,
        name: 'Awesome Rubber Car',
        description: 'Occaecati eveniet eaque ab fuga saepe. Sunt et aut consequatur quam nisi velit. Similique natus minus cumque sapiente rerum veniam autem non.',
        price: '899.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 28963
      },
      {
        id: 45,
        name: 'Rustic Metal Towels',
        description: 'Dolor qui quis. Sint unde illum qui assumenda et sed sit. Voluptas eius veniam dolor odio nostrum accusantium culpa voluptatem velit. Esse porro voluptas voluptate dicta saepe est.',
        price: '392.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 15258
      },
      {
        id: 46,
        name: 'Handmade Concrete Shoes',
        description: 'Perferendis cupiditate sed placeat velit eum quia laborum in est. Debitis facilis aliquid sapiente facere iure quasi perferendis laborum error.',
        price: '745.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 994
      },
      {
        id: 47,
        name: 'Fantastic Steel Chips',
        description: 'Sed quia minus veritatis aut cupiditate. Ut animi quibusdam explicabo numquam nesciunt. Odit dolorem et. Voluptas vero mollitia voluptatem sed id quae.',
        price: '194.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 869
      },
      {
        id: 48,
        name: 'Licensed Metal Car',
        description: 'Iure rerum aperiam magni sequi autem vitae. Et maiores molestiae dolores ea quidem quae molestiae ea id. In inventore officiis. Amet quia voluptatem vero consequatur sapiente similique laudantium. Omnis animi esse nemo eos adipisci similique iure. Laboriosam nisi nisi ut omnis quos corrupti exercitationem laudantium in.',
        price: '896.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 91282
      },
      {
        id: 49,
        name: 'Practical Concrete Keyboard',
        description: 'Cum quis ex et unde soluta eum dolores. Et consequatur et qui et alias hic voluptas. Consequatur provident in adipisci dolore eos tenetur. Sunt cupiditate qui architecto iure. Inventore totam a voluptas voluptas qui recusandae omnis.',
        price: '553.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 88825
      },
      {
        id: 50,
        name: 'Fantastic Steel Salad',
        description: 'Amet quo quia amet dolor qui. Ipsum expedita ea natus ut tenetur culpa. Dolores adipisci ab magnam inventore nihil sunt occaecati deserunt.',
        price: '873.00',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        quantity: 9915
      }
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a product always has an id.
  genId(products: Product[]): number{
      let max = Math.max(...products.map(product => product.id || 0));
      return products.length > 0 ? max + 1 : 1;
  }
}