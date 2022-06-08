import faker from 'faker';
import { Product, ProductData } from './product.interface';
import { notFound, conflict } from '@hapi/boom';

class ProductsService {
  products:Product[] = [];
  constructor() {
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });
    }
  }

  // Create a new Product
  async create(data:ProductData){
      const newProduct:Product = {
          id: faker.datatype.uuid(),
          ...data
      };
      this.products.push(newProduct);
      return newProduct;
  }

  async find() {
    return this.products;
  }

  // Find a product by id
  async findOne(id:string){
    const product = this.products.find(product => product.id === id);
    if(!product){
     throw notFound('Product not found')
    }
    if(product.isBlock){
      throw conflict('Product is blocked');
    }
    return product;
  }

  // Update a product
  async update(id:string, changes:Product){
    const index = this.products.findIndex(product => product.id === id);
    if(index === -1){
        throw notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  // Delete a product
  async delete(id:string){
    const index = this.products.findIndex(product => product.id === id);
    if(index === -1){
      throw notFound('product not found');
    }
    this.products.splice(index,1);
    return { id };
  }

}

export default ProductsService;
