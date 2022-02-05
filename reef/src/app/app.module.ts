import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { StorefrontService } from 'src/service/storefront/storefront.service';
import { StoreFrontResolver } from 'src/resolver/storefront.resolver';


@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./resources/schema/schema.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  providers : [StorefrontService, StoreFrontResolver]
})
export class AppModule {}