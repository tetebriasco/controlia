
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cierremensualdetalles
 * 
 */
export type cierremensualdetalles = $Result.DefaultSelection<Prisma.$cierremensualdetallesPayload>
/**
 * Model cierresmensuales
 * 
 */
export type cierresmensuales = $Result.DefaultSelection<Prisma.$cierresmensualesPayload>
/**
 * Model empleados
 * 
 */
export type empleados = $Result.DefaultSelection<Prisma.$empleadosPayload>
/**
 * Model fichadas
 * 
 */
export type fichadas = $Result.DefaultSelection<Prisma.$fichadasPayload>
/**
 * Model horarios
 * 
 */
export type horarios = $Result.DefaultSelection<Prisma.$horariosPayload>
/**
 * Model novedades
 * 
 */
export type novedades = $Result.DefaultSelection<Prisma.$novedadesPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Cierremensualdetalles
 * const cierremensualdetalles = await prisma.cierremensualdetalles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Cierremensualdetalles
   * const cierremensualdetalles = await prisma.cierremensualdetalles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cierremensualdetalles`: Exposes CRUD operations for the **cierremensualdetalles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cierremensualdetalles
    * const cierremensualdetalles = await prisma.cierremensualdetalles.findMany()
    * ```
    */
  get cierremensualdetalles(): Prisma.cierremensualdetallesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cierresmensuales`: Exposes CRUD operations for the **cierresmensuales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cierresmensuales
    * const cierresmensuales = await prisma.cierresmensuales.findMany()
    * ```
    */
  get cierresmensuales(): Prisma.cierresmensualesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empleados`: Exposes CRUD operations for the **empleados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleados.findMany()
    * ```
    */
  get empleados(): Prisma.empleadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fichadas`: Exposes CRUD operations for the **fichadas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fichadas
    * const fichadas = await prisma.fichadas.findMany()
    * ```
    */
  get fichadas(): Prisma.fichadasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarios`: Exposes CRUD operations for the **horarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios
    * const horarios = await prisma.horarios.findMany()
    * ```
    */
  get horarios(): Prisma.horariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.novedades`: Exposes CRUD operations for the **novedades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Novedades
    * const novedades = await prisma.novedades.findMany()
    * ```
    */
  get novedades(): Prisma.novedadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cierremensualdetalles: 'cierremensualdetalles',
    cierresmensuales: 'cierresmensuales',
    empleados: 'empleados',
    fichadas: 'fichadas',
    horarios: 'horarios',
    novedades: 'novedades',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cierremensualdetalles" | "cierresmensuales" | "empleados" | "fichadas" | "horarios" | "novedades" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cierremensualdetalles: {
        payload: Prisma.$cierremensualdetallesPayload<ExtArgs>
        fields: Prisma.cierremensualdetallesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cierremensualdetallesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cierremensualdetallesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload>
          }
          findFirst: {
            args: Prisma.cierremensualdetallesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cierremensualdetallesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload>
          }
          findMany: {
            args: Prisma.cierremensualdetallesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload>[]
          }
          create: {
            args: Prisma.cierremensualdetallesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload>
          }
          createMany: {
            args: Prisma.cierremensualdetallesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cierremensualdetallesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload>[]
          }
          delete: {
            args: Prisma.cierremensualdetallesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload>
          }
          update: {
            args: Prisma.cierremensualdetallesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload>
          }
          deleteMany: {
            args: Prisma.cierremensualdetallesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cierremensualdetallesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cierremensualdetallesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload>[]
          }
          upsert: {
            args: Prisma.cierremensualdetallesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierremensualdetallesPayload>
          }
          aggregate: {
            args: Prisma.CierremensualdetallesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCierremensualdetalles>
          }
          groupBy: {
            args: Prisma.cierremensualdetallesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CierremensualdetallesGroupByOutputType>[]
          }
          count: {
            args: Prisma.cierremensualdetallesCountArgs<ExtArgs>
            result: $Utils.Optional<CierremensualdetallesCountAggregateOutputType> | number
          }
        }
      }
      cierresmensuales: {
        payload: Prisma.$cierresmensualesPayload<ExtArgs>
        fields: Prisma.cierresmensualesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cierresmensualesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cierresmensualesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload>
          }
          findFirst: {
            args: Prisma.cierresmensualesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cierresmensualesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload>
          }
          findMany: {
            args: Prisma.cierresmensualesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload>[]
          }
          create: {
            args: Prisma.cierresmensualesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload>
          }
          createMany: {
            args: Prisma.cierresmensualesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cierresmensualesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload>[]
          }
          delete: {
            args: Prisma.cierresmensualesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload>
          }
          update: {
            args: Prisma.cierresmensualesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload>
          }
          deleteMany: {
            args: Prisma.cierresmensualesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cierresmensualesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cierresmensualesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload>[]
          }
          upsert: {
            args: Prisma.cierresmensualesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cierresmensualesPayload>
          }
          aggregate: {
            args: Prisma.CierresmensualesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCierresmensuales>
          }
          groupBy: {
            args: Prisma.cierresmensualesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CierresmensualesGroupByOutputType>[]
          }
          count: {
            args: Prisma.cierresmensualesCountArgs<ExtArgs>
            result: $Utils.Optional<CierresmensualesCountAggregateOutputType> | number
          }
        }
      }
      empleados: {
        payload: Prisma.$empleadosPayload<ExtArgs>
        fields: Prisma.empleadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.empleadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.empleadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload>
          }
          findFirst: {
            args: Prisma.empleadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.empleadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload>
          }
          findMany: {
            args: Prisma.empleadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload>[]
          }
          create: {
            args: Prisma.empleadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload>
          }
          createMany: {
            args: Prisma.empleadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.empleadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload>[]
          }
          delete: {
            args: Prisma.empleadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload>
          }
          update: {
            args: Prisma.empleadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload>
          }
          deleteMany: {
            args: Prisma.empleadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.empleadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.empleadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload>[]
          }
          upsert: {
            args: Prisma.empleadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadosPayload>
          }
          aggregate: {
            args: Prisma.EmpleadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleados>
          }
          groupBy: {
            args: Prisma.empleadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.empleadosCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadosCountAggregateOutputType> | number
          }
        }
      }
      fichadas: {
        payload: Prisma.$fichadasPayload<ExtArgs>
        fields: Prisma.fichadasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fichadasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fichadasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload>
          }
          findFirst: {
            args: Prisma.fichadasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fichadasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload>
          }
          findMany: {
            args: Prisma.fichadasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload>[]
          }
          create: {
            args: Prisma.fichadasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload>
          }
          createMany: {
            args: Prisma.fichadasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fichadasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload>[]
          }
          delete: {
            args: Prisma.fichadasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload>
          }
          update: {
            args: Prisma.fichadasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload>
          }
          deleteMany: {
            args: Prisma.fichadasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fichadasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fichadasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload>[]
          }
          upsert: {
            args: Prisma.fichadasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fichadasPayload>
          }
          aggregate: {
            args: Prisma.FichadasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFichadas>
          }
          groupBy: {
            args: Prisma.fichadasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FichadasGroupByOutputType>[]
          }
          count: {
            args: Prisma.fichadasCountArgs<ExtArgs>
            result: $Utils.Optional<FichadasCountAggregateOutputType> | number
          }
        }
      }
      horarios: {
        payload: Prisma.$horariosPayload<ExtArgs>
        fields: Prisma.horariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.horariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.horariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          findFirst: {
            args: Prisma.horariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.horariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          findMany: {
            args: Prisma.horariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>[]
          }
          create: {
            args: Prisma.horariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          createMany: {
            args: Prisma.horariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.horariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>[]
          }
          delete: {
            args: Prisma.horariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          update: {
            args: Prisma.horariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          deleteMany: {
            args: Prisma.horariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.horariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.horariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>[]
          }
          upsert: {
            args: Prisma.horariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          aggregate: {
            args: Prisma.HorariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarios>
          }
          groupBy: {
            args: Prisma.horariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.horariosCountArgs<ExtArgs>
            result: $Utils.Optional<HorariosCountAggregateOutputType> | number
          }
        }
      }
      novedades: {
        payload: Prisma.$novedadesPayload<ExtArgs>
        fields: Prisma.novedadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.novedadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.novedadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload>
          }
          findFirst: {
            args: Prisma.novedadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.novedadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload>
          }
          findMany: {
            args: Prisma.novedadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload>[]
          }
          create: {
            args: Prisma.novedadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload>
          }
          createMany: {
            args: Prisma.novedadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.novedadesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload>[]
          }
          delete: {
            args: Prisma.novedadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload>
          }
          update: {
            args: Prisma.novedadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload>
          }
          deleteMany: {
            args: Prisma.novedadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.novedadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.novedadesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload>[]
          }
          upsert: {
            args: Prisma.novedadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadesPayload>
          }
          aggregate: {
            args: Prisma.NovedadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNovedades>
          }
          groupBy: {
            args: Prisma.novedadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NovedadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.novedadesCountArgs<ExtArgs>
            result: $Utils.Optional<NovedadesCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cierremensualdetalles?: cierremensualdetallesOmit
    cierresmensuales?: cierresmensualesOmit
    empleados?: empleadosOmit
    fichadas?: fichadasOmit
    horarios?: horariosOmit
    novedades?: novedadesOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CierresmensualesCountOutputType
   */

  export type CierresmensualesCountOutputType = {
    cierremensualdetalles: number
  }

  export type CierresmensualesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cierremensualdetalles?: boolean | CierresmensualesCountOutputTypeCountCierremensualdetallesArgs
  }

  // Custom InputTypes
  /**
   * CierresmensualesCountOutputType without action
   */
  export type CierresmensualesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierresmensualesCountOutputType
     */
    select?: CierresmensualesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CierresmensualesCountOutputType without action
   */
  export type CierresmensualesCountOutputTypeCountCierremensualdetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cierremensualdetallesWhereInput
  }


  /**
   * Count Type EmpleadosCountOutputType
   */

  export type EmpleadosCountOutputType = {
    cierremensualdetalles: number
    fichadas: number
    novedades: number
    usuarios: number
  }

  export type EmpleadosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cierremensualdetalles?: boolean | EmpleadosCountOutputTypeCountCierremensualdetallesArgs
    fichadas?: boolean | EmpleadosCountOutputTypeCountFichadasArgs
    novedades?: boolean | EmpleadosCountOutputTypeCountNovedadesArgs
    usuarios?: boolean | EmpleadosCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * EmpleadosCountOutputType without action
   */
  export type EmpleadosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpleadosCountOutputType
     */
    select?: EmpleadosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpleadosCountOutputType without action
   */
  export type EmpleadosCountOutputTypeCountCierremensualdetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cierremensualdetallesWhereInput
  }

  /**
   * EmpleadosCountOutputType without action
   */
  export type EmpleadosCountOutputTypeCountFichadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fichadasWhereInput
  }

  /**
   * EmpleadosCountOutputType without action
   */
  export type EmpleadosCountOutputTypeCountNovedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: novedadesWhereInput
  }

  /**
   * EmpleadosCountOutputType without action
   */
  export type EmpleadosCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
  }


  /**
   * Count Type FichadasCountOutputType
   */

  export type FichadasCountOutputType = {
    other_fichadas: number
  }

  export type FichadasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_fichadas?: boolean | FichadasCountOutputTypeCountOther_fichadasArgs
  }

  // Custom InputTypes
  /**
   * FichadasCountOutputType without action
   */
  export type FichadasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichadasCountOutputType
     */
    select?: FichadasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FichadasCountOutputType without action
   */
  export type FichadasCountOutputTypeCountOther_fichadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fichadasWhereInput
  }


  /**
   * Count Type HorariosCountOutputType
   */

  export type HorariosCountOutputType = {
    empleados: number
  }

  export type HorariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | HorariosCountOutputTypeCountEmpleadosArgs
  }

  // Custom InputTypes
  /**
   * HorariosCountOutputType without action
   */
  export type HorariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorariosCountOutputType
     */
    select?: HorariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HorariosCountOutputType without action
   */
  export type HorariosCountOutputTypeCountEmpleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empleadosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    cierresmensuales: number
    fichadas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cierresmensuales?: boolean | UsuariosCountOutputTypeCountCierresmensualesArgs
    fichadas?: boolean | UsuariosCountOutputTypeCountFichadasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountCierresmensualesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cierresmensualesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountFichadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fichadasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cierremensualdetalles
   */

  export type AggregateCierremensualdetalles = {
    _count: CierremensualdetallesCountAggregateOutputType | null
    _avg: CierremensualdetallesAvgAggregateOutputType | null
    _sum: CierremensualdetallesSumAggregateOutputType | null
    _min: CierremensualdetallesMinAggregateOutputType | null
    _max: CierremensualdetallesMaxAggregateOutputType | null
  }

  export type CierremensualdetallesAvgAggregateOutputType = {
    id: number | null
    cierremensualid: number | null
    empleadoid: number | null
    diastrabajados: number | null
    ausenciasjustificadas: number | null
    ausenciasinjustificadas: number | null
    horasextra50: number | null
    horasextra100: number | null
    tardanzasacumuladas: number | null
  }

  export type CierremensualdetallesSumAggregateOutputType = {
    id: number | null
    cierremensualid: number | null
    empleadoid: number | null
    diastrabajados: number | null
    ausenciasjustificadas: number | null
    ausenciasinjustificadas: number | null
    horasextra50: number | null
    horasextra100: number | null
    tardanzasacumuladas: number | null
  }

  export type CierremensualdetallesMinAggregateOutputType = {
    id: number | null
    cierremensualid: number | null
    empleadoid: number | null
    diastrabajados: number | null
    ausenciasjustificadas: number | null
    ausenciasinjustificadas: number | null
    horasextra50: number | null
    horasextra100: number | null
    tardanzasacumuladas: number | null
  }

  export type CierremensualdetallesMaxAggregateOutputType = {
    id: number | null
    cierremensualid: number | null
    empleadoid: number | null
    diastrabajados: number | null
    ausenciasjustificadas: number | null
    ausenciasinjustificadas: number | null
    horasextra50: number | null
    horasextra100: number | null
    tardanzasacumuladas: number | null
  }

  export type CierremensualdetallesCountAggregateOutputType = {
    id: number
    cierremensualid: number
    empleadoid: number
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
    _all: number
  }


  export type CierremensualdetallesAvgAggregateInputType = {
    id?: true
    cierremensualid?: true
    empleadoid?: true
    diastrabajados?: true
    ausenciasjustificadas?: true
    ausenciasinjustificadas?: true
    horasextra50?: true
    horasextra100?: true
    tardanzasacumuladas?: true
  }

  export type CierremensualdetallesSumAggregateInputType = {
    id?: true
    cierremensualid?: true
    empleadoid?: true
    diastrabajados?: true
    ausenciasjustificadas?: true
    ausenciasinjustificadas?: true
    horasextra50?: true
    horasextra100?: true
    tardanzasacumuladas?: true
  }

  export type CierremensualdetallesMinAggregateInputType = {
    id?: true
    cierremensualid?: true
    empleadoid?: true
    diastrabajados?: true
    ausenciasjustificadas?: true
    ausenciasinjustificadas?: true
    horasextra50?: true
    horasextra100?: true
    tardanzasacumuladas?: true
  }

  export type CierremensualdetallesMaxAggregateInputType = {
    id?: true
    cierremensualid?: true
    empleadoid?: true
    diastrabajados?: true
    ausenciasjustificadas?: true
    ausenciasinjustificadas?: true
    horasextra50?: true
    horasextra100?: true
    tardanzasacumuladas?: true
  }

  export type CierremensualdetallesCountAggregateInputType = {
    id?: true
    cierremensualid?: true
    empleadoid?: true
    diastrabajados?: true
    ausenciasjustificadas?: true
    ausenciasinjustificadas?: true
    horasextra50?: true
    horasextra100?: true
    tardanzasacumuladas?: true
    _all?: true
  }

  export type CierremensualdetallesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cierremensualdetalles to aggregate.
     */
    where?: cierremensualdetallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cierremensualdetalles to fetch.
     */
    orderBy?: cierremensualdetallesOrderByWithRelationInput | cierremensualdetallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cierremensualdetallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cierremensualdetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cierremensualdetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cierremensualdetalles
    **/
    _count?: true | CierremensualdetallesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CierremensualdetallesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CierremensualdetallesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CierremensualdetallesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CierremensualdetallesMaxAggregateInputType
  }

  export type GetCierremensualdetallesAggregateType<T extends CierremensualdetallesAggregateArgs> = {
        [P in keyof T & keyof AggregateCierremensualdetalles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCierremensualdetalles[P]>
      : GetScalarType<T[P], AggregateCierremensualdetalles[P]>
  }




  export type cierremensualdetallesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cierremensualdetallesWhereInput
    orderBy?: cierremensualdetallesOrderByWithAggregationInput | cierremensualdetallesOrderByWithAggregationInput[]
    by: CierremensualdetallesScalarFieldEnum[] | CierremensualdetallesScalarFieldEnum
    having?: cierremensualdetallesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CierremensualdetallesCountAggregateInputType | true
    _avg?: CierremensualdetallesAvgAggregateInputType
    _sum?: CierremensualdetallesSumAggregateInputType
    _min?: CierremensualdetallesMinAggregateInputType
    _max?: CierremensualdetallesMaxAggregateInputType
  }

  export type CierremensualdetallesGroupByOutputType = {
    id: number
    cierremensualid: number
    empleadoid: number
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
    _count: CierremensualdetallesCountAggregateOutputType | null
    _avg: CierremensualdetallesAvgAggregateOutputType | null
    _sum: CierremensualdetallesSumAggregateOutputType | null
    _min: CierremensualdetallesMinAggregateOutputType | null
    _max: CierremensualdetallesMaxAggregateOutputType | null
  }

  type GetCierremensualdetallesGroupByPayload<T extends cierremensualdetallesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CierremensualdetallesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CierremensualdetallesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CierremensualdetallesGroupByOutputType[P]>
            : GetScalarType<T[P], CierremensualdetallesGroupByOutputType[P]>
        }
      >
    >


  export type cierremensualdetallesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cierremensualid?: boolean
    empleadoid?: boolean
    diastrabajados?: boolean
    ausenciasjustificadas?: boolean
    ausenciasinjustificadas?: boolean
    horasextra50?: boolean
    horasextra100?: boolean
    tardanzasacumuladas?: boolean
    cierresmensuales?: boolean | cierresmensualesDefaultArgs<ExtArgs>
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cierremensualdetalles"]>

  export type cierremensualdetallesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cierremensualid?: boolean
    empleadoid?: boolean
    diastrabajados?: boolean
    ausenciasjustificadas?: boolean
    ausenciasinjustificadas?: boolean
    horasextra50?: boolean
    horasextra100?: boolean
    tardanzasacumuladas?: boolean
    cierresmensuales?: boolean | cierresmensualesDefaultArgs<ExtArgs>
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cierremensualdetalles"]>

  export type cierremensualdetallesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cierremensualid?: boolean
    empleadoid?: boolean
    diastrabajados?: boolean
    ausenciasjustificadas?: boolean
    ausenciasinjustificadas?: boolean
    horasextra50?: boolean
    horasextra100?: boolean
    tardanzasacumuladas?: boolean
    cierresmensuales?: boolean | cierresmensualesDefaultArgs<ExtArgs>
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cierremensualdetalles"]>

  export type cierremensualdetallesSelectScalar = {
    id?: boolean
    cierremensualid?: boolean
    empleadoid?: boolean
    diastrabajados?: boolean
    ausenciasjustificadas?: boolean
    ausenciasinjustificadas?: boolean
    horasextra50?: boolean
    horasextra100?: boolean
    tardanzasacumuladas?: boolean
  }

  export type cierremensualdetallesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cierremensualid" | "empleadoid" | "diastrabajados" | "ausenciasjustificadas" | "ausenciasinjustificadas" | "horasextra50" | "horasextra100" | "tardanzasacumuladas", ExtArgs["result"]["cierremensualdetalles"]>
  export type cierremensualdetallesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cierresmensuales?: boolean | cierresmensualesDefaultArgs<ExtArgs>
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }
  export type cierremensualdetallesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cierresmensuales?: boolean | cierresmensualesDefaultArgs<ExtArgs>
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }
  export type cierremensualdetallesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cierresmensuales?: boolean | cierresmensualesDefaultArgs<ExtArgs>
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }

  export type $cierremensualdetallesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cierremensualdetalles"
    objects: {
      cierresmensuales: Prisma.$cierresmensualesPayload<ExtArgs>
      empleados: Prisma.$empleadosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cierremensualid: number
      empleadoid: number
      diastrabajados: number
      ausenciasjustificadas: number
      ausenciasinjustificadas: number
      horasextra50: number
      horasextra100: number
      tardanzasacumuladas: number
    }, ExtArgs["result"]["cierremensualdetalles"]>
    composites: {}
  }

  type cierremensualdetallesGetPayload<S extends boolean | null | undefined | cierremensualdetallesDefaultArgs> = $Result.GetResult<Prisma.$cierremensualdetallesPayload, S>

  type cierremensualdetallesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cierremensualdetallesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CierremensualdetallesCountAggregateInputType | true
    }

  export interface cierremensualdetallesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cierremensualdetalles'], meta: { name: 'cierremensualdetalles' } }
    /**
     * Find zero or one Cierremensualdetalles that matches the filter.
     * @param {cierremensualdetallesFindUniqueArgs} args - Arguments to find a Cierremensualdetalles
     * @example
     * // Get one Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cierremensualdetallesFindUniqueArgs>(args: SelectSubset<T, cierremensualdetallesFindUniqueArgs<ExtArgs>>): Prisma__cierremensualdetallesClient<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cierremensualdetalles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cierremensualdetallesFindUniqueOrThrowArgs} args - Arguments to find a Cierremensualdetalles
     * @example
     * // Get one Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cierremensualdetallesFindUniqueOrThrowArgs>(args: SelectSubset<T, cierremensualdetallesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cierremensualdetallesClient<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cierremensualdetalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierremensualdetallesFindFirstArgs} args - Arguments to find a Cierremensualdetalles
     * @example
     * // Get one Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cierremensualdetallesFindFirstArgs>(args?: SelectSubset<T, cierremensualdetallesFindFirstArgs<ExtArgs>>): Prisma__cierremensualdetallesClient<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cierremensualdetalles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierremensualdetallesFindFirstOrThrowArgs} args - Arguments to find a Cierremensualdetalles
     * @example
     * // Get one Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cierremensualdetallesFindFirstOrThrowArgs>(args?: SelectSubset<T, cierremensualdetallesFindFirstOrThrowArgs<ExtArgs>>): Prisma__cierremensualdetallesClient<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cierremensualdetalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierremensualdetallesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.findMany()
     * 
     * // Get first 10 Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cierremensualdetallesWithIdOnly = await prisma.cierremensualdetalles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cierremensualdetallesFindManyArgs>(args?: SelectSubset<T, cierremensualdetallesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cierremensualdetalles.
     * @param {cierremensualdetallesCreateArgs} args - Arguments to create a Cierremensualdetalles.
     * @example
     * // Create one Cierremensualdetalles
     * const Cierremensualdetalles = await prisma.cierremensualdetalles.create({
     *   data: {
     *     // ... data to create a Cierremensualdetalles
     *   }
     * })
     * 
     */
    create<T extends cierremensualdetallesCreateArgs>(args: SelectSubset<T, cierremensualdetallesCreateArgs<ExtArgs>>): Prisma__cierremensualdetallesClient<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cierremensualdetalles.
     * @param {cierremensualdetallesCreateManyArgs} args - Arguments to create many Cierremensualdetalles.
     * @example
     * // Create many Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cierremensualdetallesCreateManyArgs>(args?: SelectSubset<T, cierremensualdetallesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cierremensualdetalles and returns the data saved in the database.
     * @param {cierremensualdetallesCreateManyAndReturnArgs} args - Arguments to create many Cierremensualdetalles.
     * @example
     * // Create many Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cierremensualdetalles and only return the `id`
     * const cierremensualdetallesWithIdOnly = await prisma.cierremensualdetalles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cierremensualdetallesCreateManyAndReturnArgs>(args?: SelectSubset<T, cierremensualdetallesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cierremensualdetalles.
     * @param {cierremensualdetallesDeleteArgs} args - Arguments to delete one Cierremensualdetalles.
     * @example
     * // Delete one Cierremensualdetalles
     * const Cierremensualdetalles = await prisma.cierremensualdetalles.delete({
     *   where: {
     *     // ... filter to delete one Cierremensualdetalles
     *   }
     * })
     * 
     */
    delete<T extends cierremensualdetallesDeleteArgs>(args: SelectSubset<T, cierremensualdetallesDeleteArgs<ExtArgs>>): Prisma__cierremensualdetallesClient<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cierremensualdetalles.
     * @param {cierremensualdetallesUpdateArgs} args - Arguments to update one Cierremensualdetalles.
     * @example
     * // Update one Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cierremensualdetallesUpdateArgs>(args: SelectSubset<T, cierremensualdetallesUpdateArgs<ExtArgs>>): Prisma__cierremensualdetallesClient<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cierremensualdetalles.
     * @param {cierremensualdetallesDeleteManyArgs} args - Arguments to filter Cierremensualdetalles to delete.
     * @example
     * // Delete a few Cierremensualdetalles
     * const { count } = await prisma.cierremensualdetalles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cierremensualdetallesDeleteManyArgs>(args?: SelectSubset<T, cierremensualdetallesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cierremensualdetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierremensualdetallesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cierremensualdetallesUpdateManyArgs>(args: SelectSubset<T, cierremensualdetallesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cierremensualdetalles and returns the data updated in the database.
     * @param {cierremensualdetallesUpdateManyAndReturnArgs} args - Arguments to update many Cierremensualdetalles.
     * @example
     * // Update many Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cierremensualdetalles and only return the `id`
     * const cierremensualdetallesWithIdOnly = await prisma.cierremensualdetalles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cierremensualdetallesUpdateManyAndReturnArgs>(args: SelectSubset<T, cierremensualdetallesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cierremensualdetalles.
     * @param {cierremensualdetallesUpsertArgs} args - Arguments to update or create a Cierremensualdetalles.
     * @example
     * // Update or create a Cierremensualdetalles
     * const cierremensualdetalles = await prisma.cierremensualdetalles.upsert({
     *   create: {
     *     // ... data to create a Cierremensualdetalles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cierremensualdetalles we want to update
     *   }
     * })
     */
    upsert<T extends cierremensualdetallesUpsertArgs>(args: SelectSubset<T, cierremensualdetallesUpsertArgs<ExtArgs>>): Prisma__cierremensualdetallesClient<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cierremensualdetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierremensualdetallesCountArgs} args - Arguments to filter Cierremensualdetalles to count.
     * @example
     * // Count the number of Cierremensualdetalles
     * const count = await prisma.cierremensualdetalles.count({
     *   where: {
     *     // ... the filter for the Cierremensualdetalles we want to count
     *   }
     * })
    **/
    count<T extends cierremensualdetallesCountArgs>(
      args?: Subset<T, cierremensualdetallesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CierremensualdetallesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cierremensualdetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierremensualdetallesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CierremensualdetallesAggregateArgs>(args: Subset<T, CierremensualdetallesAggregateArgs>): Prisma.PrismaPromise<GetCierremensualdetallesAggregateType<T>>

    /**
     * Group by Cierremensualdetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierremensualdetallesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cierremensualdetallesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cierremensualdetallesGroupByArgs['orderBy'] }
        : { orderBy?: cierremensualdetallesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cierremensualdetallesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCierremensualdetallesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cierremensualdetalles model
   */
  readonly fields: cierremensualdetallesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cierremensualdetalles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cierremensualdetallesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cierresmensuales<T extends cierresmensualesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cierresmensualesDefaultArgs<ExtArgs>>): Prisma__cierresmensualesClient<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    empleados<T extends empleadosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadosDefaultArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cierremensualdetalles model
   */
  interface cierremensualdetallesFieldRefs {
    readonly id: FieldRef<"cierremensualdetalles", 'Int'>
    readonly cierremensualid: FieldRef<"cierremensualdetalles", 'Int'>
    readonly empleadoid: FieldRef<"cierremensualdetalles", 'Int'>
    readonly diastrabajados: FieldRef<"cierremensualdetalles", 'Int'>
    readonly ausenciasjustificadas: FieldRef<"cierremensualdetalles", 'Int'>
    readonly ausenciasinjustificadas: FieldRef<"cierremensualdetalles", 'Int'>
    readonly horasextra50: FieldRef<"cierremensualdetalles", 'Int'>
    readonly horasextra100: FieldRef<"cierremensualdetalles", 'Int'>
    readonly tardanzasacumuladas: FieldRef<"cierremensualdetalles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cierremensualdetalles findUnique
   */
  export type cierremensualdetallesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    /**
     * Filter, which cierremensualdetalles to fetch.
     */
    where: cierremensualdetallesWhereUniqueInput
  }

  /**
   * cierremensualdetalles findUniqueOrThrow
   */
  export type cierremensualdetallesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    /**
     * Filter, which cierremensualdetalles to fetch.
     */
    where: cierremensualdetallesWhereUniqueInput
  }

  /**
   * cierremensualdetalles findFirst
   */
  export type cierremensualdetallesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    /**
     * Filter, which cierremensualdetalles to fetch.
     */
    where?: cierremensualdetallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cierremensualdetalles to fetch.
     */
    orderBy?: cierremensualdetallesOrderByWithRelationInput | cierremensualdetallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cierremensualdetalles.
     */
    cursor?: cierremensualdetallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cierremensualdetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cierremensualdetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cierremensualdetalles.
     */
    distinct?: CierremensualdetallesScalarFieldEnum | CierremensualdetallesScalarFieldEnum[]
  }

  /**
   * cierremensualdetalles findFirstOrThrow
   */
  export type cierremensualdetallesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    /**
     * Filter, which cierremensualdetalles to fetch.
     */
    where?: cierremensualdetallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cierremensualdetalles to fetch.
     */
    orderBy?: cierremensualdetallesOrderByWithRelationInput | cierremensualdetallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cierremensualdetalles.
     */
    cursor?: cierremensualdetallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cierremensualdetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cierremensualdetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cierremensualdetalles.
     */
    distinct?: CierremensualdetallesScalarFieldEnum | CierremensualdetallesScalarFieldEnum[]
  }

  /**
   * cierremensualdetalles findMany
   */
  export type cierremensualdetallesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    /**
     * Filter, which cierremensualdetalles to fetch.
     */
    where?: cierremensualdetallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cierremensualdetalles to fetch.
     */
    orderBy?: cierremensualdetallesOrderByWithRelationInput | cierremensualdetallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cierremensualdetalles.
     */
    cursor?: cierremensualdetallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cierremensualdetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cierremensualdetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cierremensualdetalles.
     */
    distinct?: CierremensualdetallesScalarFieldEnum | CierremensualdetallesScalarFieldEnum[]
  }

  /**
   * cierremensualdetalles create
   */
  export type cierremensualdetallesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    /**
     * The data needed to create a cierremensualdetalles.
     */
    data: XOR<cierremensualdetallesCreateInput, cierremensualdetallesUncheckedCreateInput>
  }

  /**
   * cierremensualdetalles createMany
   */
  export type cierremensualdetallesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cierremensualdetalles.
     */
    data: cierremensualdetallesCreateManyInput | cierremensualdetallesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cierremensualdetalles createManyAndReturn
   */
  export type cierremensualdetallesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * The data used to create many cierremensualdetalles.
     */
    data: cierremensualdetallesCreateManyInput | cierremensualdetallesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cierremensualdetalles update
   */
  export type cierremensualdetallesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    /**
     * The data needed to update a cierremensualdetalles.
     */
    data: XOR<cierremensualdetallesUpdateInput, cierremensualdetallesUncheckedUpdateInput>
    /**
     * Choose, which cierremensualdetalles to update.
     */
    where: cierremensualdetallesWhereUniqueInput
  }

  /**
   * cierremensualdetalles updateMany
   */
  export type cierremensualdetallesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cierremensualdetalles.
     */
    data: XOR<cierremensualdetallesUpdateManyMutationInput, cierremensualdetallesUncheckedUpdateManyInput>
    /**
     * Filter which cierremensualdetalles to update
     */
    where?: cierremensualdetallesWhereInput
    /**
     * Limit how many cierremensualdetalles to update.
     */
    limit?: number
  }

  /**
   * cierremensualdetalles updateManyAndReturn
   */
  export type cierremensualdetallesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * The data used to update cierremensualdetalles.
     */
    data: XOR<cierremensualdetallesUpdateManyMutationInput, cierremensualdetallesUncheckedUpdateManyInput>
    /**
     * Filter which cierremensualdetalles to update
     */
    where?: cierremensualdetallesWhereInput
    /**
     * Limit how many cierremensualdetalles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cierremensualdetalles upsert
   */
  export type cierremensualdetallesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    /**
     * The filter to search for the cierremensualdetalles to update in case it exists.
     */
    where: cierremensualdetallesWhereUniqueInput
    /**
     * In case the cierremensualdetalles found by the `where` argument doesn't exist, create a new cierremensualdetalles with this data.
     */
    create: XOR<cierremensualdetallesCreateInput, cierremensualdetallesUncheckedCreateInput>
    /**
     * In case the cierremensualdetalles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cierremensualdetallesUpdateInput, cierremensualdetallesUncheckedUpdateInput>
  }

  /**
   * cierremensualdetalles delete
   */
  export type cierremensualdetallesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    /**
     * Filter which cierremensualdetalles to delete.
     */
    where: cierremensualdetallesWhereUniqueInput
  }

  /**
   * cierremensualdetalles deleteMany
   */
  export type cierremensualdetallesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cierremensualdetalles to delete
     */
    where?: cierremensualdetallesWhereInput
    /**
     * Limit how many cierremensualdetalles to delete.
     */
    limit?: number
  }

  /**
   * cierremensualdetalles without action
   */
  export type cierremensualdetallesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
  }


  /**
   * Model cierresmensuales
   */

  export type AggregateCierresmensuales = {
    _count: CierresmensualesCountAggregateOutputType | null
    _avg: CierresmensualesAvgAggregateOutputType | null
    _sum: CierresmensualesSumAggregateOutputType | null
    _min: CierresmensualesMinAggregateOutputType | null
    _max: CierresmensualesMaxAggregateOutputType | null
  }

  export type CierresmensualesAvgAggregateOutputType = {
    id: number | null
    usuariocierreid: number | null
  }

  export type CierresmensualesSumAggregateOutputType = {
    id: number | null
    usuariocierreid: number | null
  }

  export type CierresmensualesMinAggregateOutputType = {
    id: number | null
    periodo: string | null
    fechacierre: Date | null
    usuariocierreid: number | null
    estado: string | null
  }

  export type CierresmensualesMaxAggregateOutputType = {
    id: number | null
    periodo: string | null
    fechacierre: Date | null
    usuariocierreid: number | null
    estado: string | null
  }

  export type CierresmensualesCountAggregateOutputType = {
    id: number
    periodo: number
    fechacierre: number
    usuariocierreid: number
    estado: number
    _all: number
  }


  export type CierresmensualesAvgAggregateInputType = {
    id?: true
    usuariocierreid?: true
  }

  export type CierresmensualesSumAggregateInputType = {
    id?: true
    usuariocierreid?: true
  }

  export type CierresmensualesMinAggregateInputType = {
    id?: true
    periodo?: true
    fechacierre?: true
    usuariocierreid?: true
    estado?: true
  }

  export type CierresmensualesMaxAggregateInputType = {
    id?: true
    periodo?: true
    fechacierre?: true
    usuariocierreid?: true
    estado?: true
  }

  export type CierresmensualesCountAggregateInputType = {
    id?: true
    periodo?: true
    fechacierre?: true
    usuariocierreid?: true
    estado?: true
    _all?: true
  }

  export type CierresmensualesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cierresmensuales to aggregate.
     */
    where?: cierresmensualesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cierresmensuales to fetch.
     */
    orderBy?: cierresmensualesOrderByWithRelationInput | cierresmensualesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cierresmensualesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cierresmensuales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cierresmensuales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cierresmensuales
    **/
    _count?: true | CierresmensualesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CierresmensualesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CierresmensualesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CierresmensualesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CierresmensualesMaxAggregateInputType
  }

  export type GetCierresmensualesAggregateType<T extends CierresmensualesAggregateArgs> = {
        [P in keyof T & keyof AggregateCierresmensuales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCierresmensuales[P]>
      : GetScalarType<T[P], AggregateCierresmensuales[P]>
  }




  export type cierresmensualesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cierresmensualesWhereInput
    orderBy?: cierresmensualesOrderByWithAggregationInput | cierresmensualesOrderByWithAggregationInput[]
    by: CierresmensualesScalarFieldEnum[] | CierresmensualesScalarFieldEnum
    having?: cierresmensualesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CierresmensualesCountAggregateInputType | true
    _avg?: CierresmensualesAvgAggregateInputType
    _sum?: CierresmensualesSumAggregateInputType
    _min?: CierresmensualesMinAggregateInputType
    _max?: CierresmensualesMaxAggregateInputType
  }

  export type CierresmensualesGroupByOutputType = {
    id: number
    periodo: string
    fechacierre: Date | null
    usuariocierreid: number | null
    estado: string
    _count: CierresmensualesCountAggregateOutputType | null
    _avg: CierresmensualesAvgAggregateOutputType | null
    _sum: CierresmensualesSumAggregateOutputType | null
    _min: CierresmensualesMinAggregateOutputType | null
    _max: CierresmensualesMaxAggregateOutputType | null
  }

  type GetCierresmensualesGroupByPayload<T extends cierresmensualesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CierresmensualesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CierresmensualesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CierresmensualesGroupByOutputType[P]>
            : GetScalarType<T[P], CierresmensualesGroupByOutputType[P]>
        }
      >
    >


  export type cierresmensualesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodo?: boolean
    fechacierre?: boolean
    usuariocierreid?: boolean
    estado?: boolean
    cierremensualdetalles?: boolean | cierresmensuales$cierremensualdetallesArgs<ExtArgs>
    usuarios?: boolean | cierresmensuales$usuariosArgs<ExtArgs>
    _count?: boolean | CierresmensualesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cierresmensuales"]>

  export type cierresmensualesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodo?: boolean
    fechacierre?: boolean
    usuariocierreid?: boolean
    estado?: boolean
    usuarios?: boolean | cierresmensuales$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["cierresmensuales"]>

  export type cierresmensualesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodo?: boolean
    fechacierre?: boolean
    usuariocierreid?: boolean
    estado?: boolean
    usuarios?: boolean | cierresmensuales$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["cierresmensuales"]>

  export type cierresmensualesSelectScalar = {
    id?: boolean
    periodo?: boolean
    fechacierre?: boolean
    usuariocierreid?: boolean
    estado?: boolean
  }

  export type cierresmensualesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "periodo" | "fechacierre" | "usuariocierreid" | "estado", ExtArgs["result"]["cierresmensuales"]>
  export type cierresmensualesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cierremensualdetalles?: boolean | cierresmensuales$cierremensualdetallesArgs<ExtArgs>
    usuarios?: boolean | cierresmensuales$usuariosArgs<ExtArgs>
    _count?: boolean | CierresmensualesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cierresmensualesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | cierresmensuales$usuariosArgs<ExtArgs>
  }
  export type cierresmensualesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | cierresmensuales$usuariosArgs<ExtArgs>
  }

  export type $cierresmensualesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cierresmensuales"
    objects: {
      cierremensualdetalles: Prisma.$cierremensualdetallesPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      periodo: string
      fechacierre: Date | null
      usuariocierreid: number | null
      estado: string
    }, ExtArgs["result"]["cierresmensuales"]>
    composites: {}
  }

  type cierresmensualesGetPayload<S extends boolean | null | undefined | cierresmensualesDefaultArgs> = $Result.GetResult<Prisma.$cierresmensualesPayload, S>

  type cierresmensualesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cierresmensualesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CierresmensualesCountAggregateInputType | true
    }

  export interface cierresmensualesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cierresmensuales'], meta: { name: 'cierresmensuales' } }
    /**
     * Find zero or one Cierresmensuales that matches the filter.
     * @param {cierresmensualesFindUniqueArgs} args - Arguments to find a Cierresmensuales
     * @example
     * // Get one Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cierresmensualesFindUniqueArgs>(args: SelectSubset<T, cierresmensualesFindUniqueArgs<ExtArgs>>): Prisma__cierresmensualesClient<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cierresmensuales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cierresmensualesFindUniqueOrThrowArgs} args - Arguments to find a Cierresmensuales
     * @example
     * // Get one Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cierresmensualesFindUniqueOrThrowArgs>(args: SelectSubset<T, cierresmensualesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cierresmensualesClient<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cierresmensuales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierresmensualesFindFirstArgs} args - Arguments to find a Cierresmensuales
     * @example
     * // Get one Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cierresmensualesFindFirstArgs>(args?: SelectSubset<T, cierresmensualesFindFirstArgs<ExtArgs>>): Prisma__cierresmensualesClient<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cierresmensuales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierresmensualesFindFirstOrThrowArgs} args - Arguments to find a Cierresmensuales
     * @example
     * // Get one Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cierresmensualesFindFirstOrThrowArgs>(args?: SelectSubset<T, cierresmensualesFindFirstOrThrowArgs<ExtArgs>>): Prisma__cierresmensualesClient<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cierresmensuales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierresmensualesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.findMany()
     * 
     * // Get first 10 Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cierresmensualesWithIdOnly = await prisma.cierresmensuales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cierresmensualesFindManyArgs>(args?: SelectSubset<T, cierresmensualesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cierresmensuales.
     * @param {cierresmensualesCreateArgs} args - Arguments to create a Cierresmensuales.
     * @example
     * // Create one Cierresmensuales
     * const Cierresmensuales = await prisma.cierresmensuales.create({
     *   data: {
     *     // ... data to create a Cierresmensuales
     *   }
     * })
     * 
     */
    create<T extends cierresmensualesCreateArgs>(args: SelectSubset<T, cierresmensualesCreateArgs<ExtArgs>>): Prisma__cierresmensualesClient<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cierresmensuales.
     * @param {cierresmensualesCreateManyArgs} args - Arguments to create many Cierresmensuales.
     * @example
     * // Create many Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cierresmensualesCreateManyArgs>(args?: SelectSubset<T, cierresmensualesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cierresmensuales and returns the data saved in the database.
     * @param {cierresmensualesCreateManyAndReturnArgs} args - Arguments to create many Cierresmensuales.
     * @example
     * // Create many Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cierresmensuales and only return the `id`
     * const cierresmensualesWithIdOnly = await prisma.cierresmensuales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cierresmensualesCreateManyAndReturnArgs>(args?: SelectSubset<T, cierresmensualesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cierresmensuales.
     * @param {cierresmensualesDeleteArgs} args - Arguments to delete one Cierresmensuales.
     * @example
     * // Delete one Cierresmensuales
     * const Cierresmensuales = await prisma.cierresmensuales.delete({
     *   where: {
     *     // ... filter to delete one Cierresmensuales
     *   }
     * })
     * 
     */
    delete<T extends cierresmensualesDeleteArgs>(args: SelectSubset<T, cierresmensualesDeleteArgs<ExtArgs>>): Prisma__cierresmensualesClient<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cierresmensuales.
     * @param {cierresmensualesUpdateArgs} args - Arguments to update one Cierresmensuales.
     * @example
     * // Update one Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cierresmensualesUpdateArgs>(args: SelectSubset<T, cierresmensualesUpdateArgs<ExtArgs>>): Prisma__cierresmensualesClient<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cierresmensuales.
     * @param {cierresmensualesDeleteManyArgs} args - Arguments to filter Cierresmensuales to delete.
     * @example
     * // Delete a few Cierresmensuales
     * const { count } = await prisma.cierresmensuales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cierresmensualesDeleteManyArgs>(args?: SelectSubset<T, cierresmensualesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cierresmensuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierresmensualesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cierresmensualesUpdateManyArgs>(args: SelectSubset<T, cierresmensualesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cierresmensuales and returns the data updated in the database.
     * @param {cierresmensualesUpdateManyAndReturnArgs} args - Arguments to update many Cierresmensuales.
     * @example
     * // Update many Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cierresmensuales and only return the `id`
     * const cierresmensualesWithIdOnly = await prisma.cierresmensuales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cierresmensualesUpdateManyAndReturnArgs>(args: SelectSubset<T, cierresmensualesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cierresmensuales.
     * @param {cierresmensualesUpsertArgs} args - Arguments to update or create a Cierresmensuales.
     * @example
     * // Update or create a Cierresmensuales
     * const cierresmensuales = await prisma.cierresmensuales.upsert({
     *   create: {
     *     // ... data to create a Cierresmensuales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cierresmensuales we want to update
     *   }
     * })
     */
    upsert<T extends cierresmensualesUpsertArgs>(args: SelectSubset<T, cierresmensualesUpsertArgs<ExtArgs>>): Prisma__cierresmensualesClient<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cierresmensuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierresmensualesCountArgs} args - Arguments to filter Cierresmensuales to count.
     * @example
     * // Count the number of Cierresmensuales
     * const count = await prisma.cierresmensuales.count({
     *   where: {
     *     // ... the filter for the Cierresmensuales we want to count
     *   }
     * })
    **/
    count<T extends cierresmensualesCountArgs>(
      args?: Subset<T, cierresmensualesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CierresmensualesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cierresmensuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierresmensualesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CierresmensualesAggregateArgs>(args: Subset<T, CierresmensualesAggregateArgs>): Prisma.PrismaPromise<GetCierresmensualesAggregateType<T>>

    /**
     * Group by Cierresmensuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cierresmensualesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cierresmensualesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cierresmensualesGroupByArgs['orderBy'] }
        : { orderBy?: cierresmensualesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cierresmensualesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCierresmensualesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cierresmensuales model
   */
  readonly fields: cierresmensualesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cierresmensuales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cierresmensualesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cierremensualdetalles<T extends cierresmensuales$cierremensualdetallesArgs<ExtArgs> = {}>(args?: Subset<T, cierresmensuales$cierremensualdetallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends cierresmensuales$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, cierresmensuales$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cierresmensuales model
   */
  interface cierresmensualesFieldRefs {
    readonly id: FieldRef<"cierresmensuales", 'Int'>
    readonly periodo: FieldRef<"cierresmensuales", 'String'>
    readonly fechacierre: FieldRef<"cierresmensuales", 'DateTime'>
    readonly usuariocierreid: FieldRef<"cierresmensuales", 'Int'>
    readonly estado: FieldRef<"cierresmensuales", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cierresmensuales findUnique
   */
  export type cierresmensualesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    /**
     * Filter, which cierresmensuales to fetch.
     */
    where: cierresmensualesWhereUniqueInput
  }

  /**
   * cierresmensuales findUniqueOrThrow
   */
  export type cierresmensualesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    /**
     * Filter, which cierresmensuales to fetch.
     */
    where: cierresmensualesWhereUniqueInput
  }

  /**
   * cierresmensuales findFirst
   */
  export type cierresmensualesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    /**
     * Filter, which cierresmensuales to fetch.
     */
    where?: cierresmensualesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cierresmensuales to fetch.
     */
    orderBy?: cierresmensualesOrderByWithRelationInput | cierresmensualesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cierresmensuales.
     */
    cursor?: cierresmensualesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cierresmensuales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cierresmensuales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cierresmensuales.
     */
    distinct?: CierresmensualesScalarFieldEnum | CierresmensualesScalarFieldEnum[]
  }

  /**
   * cierresmensuales findFirstOrThrow
   */
  export type cierresmensualesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    /**
     * Filter, which cierresmensuales to fetch.
     */
    where?: cierresmensualesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cierresmensuales to fetch.
     */
    orderBy?: cierresmensualesOrderByWithRelationInput | cierresmensualesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cierresmensuales.
     */
    cursor?: cierresmensualesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cierresmensuales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cierresmensuales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cierresmensuales.
     */
    distinct?: CierresmensualesScalarFieldEnum | CierresmensualesScalarFieldEnum[]
  }

  /**
   * cierresmensuales findMany
   */
  export type cierresmensualesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    /**
     * Filter, which cierresmensuales to fetch.
     */
    where?: cierresmensualesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cierresmensuales to fetch.
     */
    orderBy?: cierresmensualesOrderByWithRelationInput | cierresmensualesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cierresmensuales.
     */
    cursor?: cierresmensualesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cierresmensuales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cierresmensuales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cierresmensuales.
     */
    distinct?: CierresmensualesScalarFieldEnum | CierresmensualesScalarFieldEnum[]
  }

  /**
   * cierresmensuales create
   */
  export type cierresmensualesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    /**
     * The data needed to create a cierresmensuales.
     */
    data: XOR<cierresmensualesCreateInput, cierresmensualesUncheckedCreateInput>
  }

  /**
   * cierresmensuales createMany
   */
  export type cierresmensualesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cierresmensuales.
     */
    data: cierresmensualesCreateManyInput | cierresmensualesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cierresmensuales createManyAndReturn
   */
  export type cierresmensualesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * The data used to create many cierresmensuales.
     */
    data: cierresmensualesCreateManyInput | cierresmensualesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cierresmensuales update
   */
  export type cierresmensualesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    /**
     * The data needed to update a cierresmensuales.
     */
    data: XOR<cierresmensualesUpdateInput, cierresmensualesUncheckedUpdateInput>
    /**
     * Choose, which cierresmensuales to update.
     */
    where: cierresmensualesWhereUniqueInput
  }

  /**
   * cierresmensuales updateMany
   */
  export type cierresmensualesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cierresmensuales.
     */
    data: XOR<cierresmensualesUpdateManyMutationInput, cierresmensualesUncheckedUpdateManyInput>
    /**
     * Filter which cierresmensuales to update
     */
    where?: cierresmensualesWhereInput
    /**
     * Limit how many cierresmensuales to update.
     */
    limit?: number
  }

  /**
   * cierresmensuales updateManyAndReturn
   */
  export type cierresmensualesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * The data used to update cierresmensuales.
     */
    data: XOR<cierresmensualesUpdateManyMutationInput, cierresmensualesUncheckedUpdateManyInput>
    /**
     * Filter which cierresmensuales to update
     */
    where?: cierresmensualesWhereInput
    /**
     * Limit how many cierresmensuales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cierresmensuales upsert
   */
  export type cierresmensualesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    /**
     * The filter to search for the cierresmensuales to update in case it exists.
     */
    where: cierresmensualesWhereUniqueInput
    /**
     * In case the cierresmensuales found by the `where` argument doesn't exist, create a new cierresmensuales with this data.
     */
    create: XOR<cierresmensualesCreateInput, cierresmensualesUncheckedCreateInput>
    /**
     * In case the cierresmensuales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cierresmensualesUpdateInput, cierresmensualesUncheckedUpdateInput>
  }

  /**
   * cierresmensuales delete
   */
  export type cierresmensualesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    /**
     * Filter which cierresmensuales to delete.
     */
    where: cierresmensualesWhereUniqueInput
  }

  /**
   * cierresmensuales deleteMany
   */
  export type cierresmensualesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cierresmensuales to delete
     */
    where?: cierresmensualesWhereInput
    /**
     * Limit how many cierresmensuales to delete.
     */
    limit?: number
  }

  /**
   * cierresmensuales.cierremensualdetalles
   */
  export type cierresmensuales$cierremensualdetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    where?: cierremensualdetallesWhereInput
    orderBy?: cierremensualdetallesOrderByWithRelationInput | cierremensualdetallesOrderByWithRelationInput[]
    cursor?: cierremensualdetallesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CierremensualdetallesScalarFieldEnum | CierremensualdetallesScalarFieldEnum[]
  }

  /**
   * cierresmensuales.usuarios
   */
  export type cierresmensuales$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * cierresmensuales without action
   */
  export type cierresmensualesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
  }


  /**
   * Model empleados
   */

  export type AggregateEmpleados = {
    _count: EmpleadosCountAggregateOutputType | null
    _avg: EmpleadosAvgAggregateOutputType | null
    _sum: EmpleadosSumAggregateOutputType | null
    _min: EmpleadosMinAggregateOutputType | null
    _max: EmpleadosMaxAggregateOutputType | null
  }

  export type EmpleadosAvgAggregateOutputType = {
    id: number | null
    horarioid: number | null
  }

  export type EmpleadosSumAggregateOutputType = {
    id: number | null
    horarioid: number | null
  }

  export type EmpleadosMinAggregateOutputType = {
    id: number | null
    legajo: string | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    cuil: string | null
    fechaingreso: Date | null
    categorialaboral: string | null
    convenio: string | null
    tipojornada: string | null
    horarioid: number | null
    diasdescanso: string | null
    modalidadfichada: string | null
    estado: string | null
  }

  export type EmpleadosMaxAggregateOutputType = {
    id: number | null
    legajo: string | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    cuil: string | null
    fechaingreso: Date | null
    categorialaboral: string | null
    convenio: string | null
    tipojornada: string | null
    horarioid: number | null
    diasdescanso: string | null
    modalidadfichada: string | null
    estado: string | null
  }

  export type EmpleadosCountAggregateOutputType = {
    id: number
    legajo: number
    nombre: number
    apellido: number
    dni: number
    cuil: number
    fechaingreso: number
    categorialaboral: number
    convenio: number
    tipojornada: number
    horarioid: number
    diasdescanso: number
    modalidadfichada: number
    estado: number
    _all: number
  }


  export type EmpleadosAvgAggregateInputType = {
    id?: true
    horarioid?: true
  }

  export type EmpleadosSumAggregateInputType = {
    id?: true
    horarioid?: true
  }

  export type EmpleadosMinAggregateInputType = {
    id?: true
    legajo?: true
    nombre?: true
    apellido?: true
    dni?: true
    cuil?: true
    fechaingreso?: true
    categorialaboral?: true
    convenio?: true
    tipojornada?: true
    horarioid?: true
    diasdescanso?: true
    modalidadfichada?: true
    estado?: true
  }

  export type EmpleadosMaxAggregateInputType = {
    id?: true
    legajo?: true
    nombre?: true
    apellido?: true
    dni?: true
    cuil?: true
    fechaingreso?: true
    categorialaboral?: true
    convenio?: true
    tipojornada?: true
    horarioid?: true
    diasdescanso?: true
    modalidadfichada?: true
    estado?: true
  }

  export type EmpleadosCountAggregateInputType = {
    id?: true
    legajo?: true
    nombre?: true
    apellido?: true
    dni?: true
    cuil?: true
    fechaingreso?: true
    categorialaboral?: true
    convenio?: true
    tipojornada?: true
    horarioid?: true
    diasdescanso?: true
    modalidadfichada?: true
    estado?: true
    _all?: true
  }

  export type EmpleadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empleados to aggregate.
     */
    where?: empleadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadosOrderByWithRelationInput | empleadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: empleadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned empleados
    **/
    _count?: true | EmpleadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadosMaxAggregateInputType
  }

  export type GetEmpleadosAggregateType<T extends EmpleadosAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleados[P]>
      : GetScalarType<T[P], AggregateEmpleados[P]>
  }




  export type empleadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empleadosWhereInput
    orderBy?: empleadosOrderByWithAggregationInput | empleadosOrderByWithAggregationInput[]
    by: EmpleadosScalarFieldEnum[] | EmpleadosScalarFieldEnum
    having?: empleadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadosCountAggregateInputType | true
    _avg?: EmpleadosAvgAggregateInputType
    _sum?: EmpleadosSumAggregateInputType
    _min?: EmpleadosMinAggregateInputType
    _max?: EmpleadosMaxAggregateInputType
  }

  export type EmpleadosGroupByOutputType = {
    id: number
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date
    categorialaboral: string
    convenio: string | null
    tipojornada: string
    horarioid: number
    diasdescanso: string
    modalidadfichada: string
    estado: string
    _count: EmpleadosCountAggregateOutputType | null
    _avg: EmpleadosAvgAggregateOutputType | null
    _sum: EmpleadosSumAggregateOutputType | null
    _min: EmpleadosMinAggregateOutputType | null
    _max: EmpleadosMaxAggregateOutputType | null
  }

  type GetEmpleadosGroupByPayload<T extends empleadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadosGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadosGroupByOutputType[P]>
        }
      >
    >


  export type empleadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    cuil?: boolean
    fechaingreso?: boolean
    categorialaboral?: boolean
    convenio?: boolean
    tipojornada?: boolean
    horarioid?: boolean
    diasdescanso?: boolean
    modalidadfichada?: boolean
    estado?: boolean
    cierremensualdetalles?: boolean | empleados$cierremensualdetallesArgs<ExtArgs>
    horarios?: boolean | horariosDefaultArgs<ExtArgs>
    fichadas?: boolean | empleados$fichadasArgs<ExtArgs>
    novedades?: boolean | empleados$novedadesArgs<ExtArgs>
    usuarios?: boolean | empleados$usuariosArgs<ExtArgs>
    _count?: boolean | EmpleadosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleados"]>

  export type empleadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    cuil?: boolean
    fechaingreso?: boolean
    categorialaboral?: boolean
    convenio?: boolean
    tipojornada?: boolean
    horarioid?: boolean
    diasdescanso?: boolean
    modalidadfichada?: boolean
    estado?: boolean
    horarios?: boolean | horariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleados"]>

  export type empleadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    cuil?: boolean
    fechaingreso?: boolean
    categorialaboral?: boolean
    convenio?: boolean
    tipojornada?: boolean
    horarioid?: boolean
    diasdescanso?: boolean
    modalidadfichada?: boolean
    estado?: boolean
    horarios?: boolean | horariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleados"]>

  export type empleadosSelectScalar = {
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    cuil?: boolean
    fechaingreso?: boolean
    categorialaboral?: boolean
    convenio?: boolean
    tipojornada?: boolean
    horarioid?: boolean
    diasdescanso?: boolean
    modalidadfichada?: boolean
    estado?: boolean
  }

  export type empleadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "legajo" | "nombre" | "apellido" | "dni" | "cuil" | "fechaingreso" | "categorialaboral" | "convenio" | "tipojornada" | "horarioid" | "diasdescanso" | "modalidadfichada" | "estado", ExtArgs["result"]["empleados"]>
  export type empleadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cierremensualdetalles?: boolean | empleados$cierremensualdetallesArgs<ExtArgs>
    horarios?: boolean | horariosDefaultArgs<ExtArgs>
    fichadas?: boolean | empleados$fichadasArgs<ExtArgs>
    novedades?: boolean | empleados$novedadesArgs<ExtArgs>
    usuarios?: boolean | empleados$usuariosArgs<ExtArgs>
    _count?: boolean | EmpleadosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type empleadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horarios?: boolean | horariosDefaultArgs<ExtArgs>
  }
  export type empleadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horarios?: boolean | horariosDefaultArgs<ExtArgs>
  }

  export type $empleadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "empleados"
    objects: {
      cierremensualdetalles: Prisma.$cierremensualdetallesPayload<ExtArgs>[]
      horarios: Prisma.$horariosPayload<ExtArgs>
      fichadas: Prisma.$fichadasPayload<ExtArgs>[]
      novedades: Prisma.$novedadesPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      legajo: string
      nombre: string
      apellido: string
      dni: string
      cuil: string
      fechaingreso: Date
      categorialaboral: string
      convenio: string | null
      tipojornada: string
      horarioid: number
      diasdescanso: string
      modalidadfichada: string
      estado: string
    }, ExtArgs["result"]["empleados"]>
    composites: {}
  }

  type empleadosGetPayload<S extends boolean | null | undefined | empleadosDefaultArgs> = $Result.GetResult<Prisma.$empleadosPayload, S>

  type empleadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<empleadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpleadosCountAggregateInputType | true
    }

  export interface empleadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['empleados'], meta: { name: 'empleados' } }
    /**
     * Find zero or one Empleados that matches the filter.
     * @param {empleadosFindUniqueArgs} args - Arguments to find a Empleados
     * @example
     * // Get one Empleados
     * const empleados = await prisma.empleados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends empleadosFindUniqueArgs>(args: SelectSubset<T, empleadosFindUniqueArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empleados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {empleadosFindUniqueOrThrowArgs} args - Arguments to find a Empleados
     * @example
     * // Get one Empleados
     * const empleados = await prisma.empleados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends empleadosFindUniqueOrThrowArgs>(args: SelectSubset<T, empleadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadosFindFirstArgs} args - Arguments to find a Empleados
     * @example
     * // Get one Empleados
     * const empleados = await prisma.empleados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends empleadosFindFirstArgs>(args?: SelectSubset<T, empleadosFindFirstArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadosFindFirstOrThrowArgs} args - Arguments to find a Empleados
     * @example
     * // Get one Empleados
     * const empleados = await prisma.empleados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends empleadosFindFirstOrThrowArgs>(args?: SelectSubset<T, empleadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleados.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empleadosWithIdOnly = await prisma.empleados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends empleadosFindManyArgs>(args?: SelectSubset<T, empleadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empleados.
     * @param {empleadosCreateArgs} args - Arguments to create a Empleados.
     * @example
     * // Create one Empleados
     * const Empleados = await prisma.empleados.create({
     *   data: {
     *     // ... data to create a Empleados
     *   }
     * })
     * 
     */
    create<T extends empleadosCreateArgs>(args: SelectSubset<T, empleadosCreateArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empleados.
     * @param {empleadosCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleados = await prisma.empleados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends empleadosCreateManyArgs>(args?: SelectSubset<T, empleadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empleados and returns the data saved in the database.
     * @param {empleadosCreateManyAndReturnArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleados = await prisma.empleados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empleados and only return the `id`
     * const empleadosWithIdOnly = await prisma.empleados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends empleadosCreateManyAndReturnArgs>(args?: SelectSubset<T, empleadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empleados.
     * @param {empleadosDeleteArgs} args - Arguments to delete one Empleados.
     * @example
     * // Delete one Empleados
     * const Empleados = await prisma.empleados.delete({
     *   where: {
     *     // ... filter to delete one Empleados
     *   }
     * })
     * 
     */
    delete<T extends empleadosDeleteArgs>(args: SelectSubset<T, empleadosDeleteArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empleados.
     * @param {empleadosUpdateArgs} args - Arguments to update one Empleados.
     * @example
     * // Update one Empleados
     * const empleados = await prisma.empleados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends empleadosUpdateArgs>(args: SelectSubset<T, empleadosUpdateArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empleados.
     * @param {empleadosDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends empleadosDeleteManyArgs>(args?: SelectSubset<T, empleadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleados = await prisma.empleados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends empleadosUpdateManyArgs>(args: SelectSubset<T, empleadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados and returns the data updated in the database.
     * @param {empleadosUpdateManyAndReturnArgs} args - Arguments to update many Empleados.
     * @example
     * // Update many Empleados
     * const empleados = await prisma.empleados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empleados and only return the `id`
     * const empleadosWithIdOnly = await prisma.empleados.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends empleadosUpdateManyAndReturnArgs>(args: SelectSubset<T, empleadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empleados.
     * @param {empleadosUpsertArgs} args - Arguments to update or create a Empleados.
     * @example
     * // Update or create a Empleados
     * const empleados = await prisma.empleados.upsert({
     *   create: {
     *     // ... data to create a Empleados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleados we want to update
     *   }
     * })
     */
    upsert<T extends empleadosUpsertArgs>(args: SelectSubset<T, empleadosUpsertArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadosCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleados.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends empleadosCountArgs>(
      args?: Subset<T, empleadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpleadosAggregateArgs>(args: Subset<T, EmpleadosAggregateArgs>): Prisma.PrismaPromise<GetEmpleadosAggregateType<T>>

    /**
     * Group by Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends empleadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: empleadosGroupByArgs['orderBy'] }
        : { orderBy?: empleadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, empleadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the empleados model
   */
  readonly fields: empleadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for empleados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__empleadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cierremensualdetalles<T extends empleados$cierremensualdetallesArgs<ExtArgs> = {}>(args?: Subset<T, empleados$cierremensualdetallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cierremensualdetallesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios<T extends horariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, horariosDefaultArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fichadas<T extends empleados$fichadasArgs<ExtArgs> = {}>(args?: Subset<T, empleados$fichadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    novedades<T extends empleados$novedadesArgs<ExtArgs> = {}>(args?: Subset<T, empleados$novedadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends empleados$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, empleados$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the empleados model
   */
  interface empleadosFieldRefs {
    readonly id: FieldRef<"empleados", 'Int'>
    readonly legajo: FieldRef<"empleados", 'String'>
    readonly nombre: FieldRef<"empleados", 'String'>
    readonly apellido: FieldRef<"empleados", 'String'>
    readonly dni: FieldRef<"empleados", 'String'>
    readonly cuil: FieldRef<"empleados", 'String'>
    readonly fechaingreso: FieldRef<"empleados", 'DateTime'>
    readonly categorialaboral: FieldRef<"empleados", 'String'>
    readonly convenio: FieldRef<"empleados", 'String'>
    readonly tipojornada: FieldRef<"empleados", 'String'>
    readonly horarioid: FieldRef<"empleados", 'Int'>
    readonly diasdescanso: FieldRef<"empleados", 'String'>
    readonly modalidadfichada: FieldRef<"empleados", 'String'>
    readonly estado: FieldRef<"empleados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * empleados findUnique
   */
  export type empleadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    /**
     * Filter, which empleados to fetch.
     */
    where: empleadosWhereUniqueInput
  }

  /**
   * empleados findUniqueOrThrow
   */
  export type empleadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    /**
     * Filter, which empleados to fetch.
     */
    where: empleadosWhereUniqueInput
  }

  /**
   * empleados findFirst
   */
  export type empleadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    /**
     * Filter, which empleados to fetch.
     */
    where?: empleadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadosOrderByWithRelationInput | empleadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleados.
     */
    cursor?: empleadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleados.
     */
    distinct?: EmpleadosScalarFieldEnum | EmpleadosScalarFieldEnum[]
  }

  /**
   * empleados findFirstOrThrow
   */
  export type empleadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    /**
     * Filter, which empleados to fetch.
     */
    where?: empleadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadosOrderByWithRelationInput | empleadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleados.
     */
    cursor?: empleadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleados.
     */
    distinct?: EmpleadosScalarFieldEnum | EmpleadosScalarFieldEnum[]
  }

  /**
   * empleados findMany
   */
  export type empleadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    /**
     * Filter, which empleados to fetch.
     */
    where?: empleadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadosOrderByWithRelationInput | empleadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing empleados.
     */
    cursor?: empleadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleados.
     */
    distinct?: EmpleadosScalarFieldEnum | EmpleadosScalarFieldEnum[]
  }

  /**
   * empleados create
   */
  export type empleadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    /**
     * The data needed to create a empleados.
     */
    data: XOR<empleadosCreateInput, empleadosUncheckedCreateInput>
  }

  /**
   * empleados createMany
   */
  export type empleadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many empleados.
     */
    data: empleadosCreateManyInput | empleadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * empleados createManyAndReturn
   */
  export type empleadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * The data used to create many empleados.
     */
    data: empleadosCreateManyInput | empleadosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * empleados update
   */
  export type empleadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    /**
     * The data needed to update a empleados.
     */
    data: XOR<empleadosUpdateInput, empleadosUncheckedUpdateInput>
    /**
     * Choose, which empleados to update.
     */
    where: empleadosWhereUniqueInput
  }

  /**
   * empleados updateMany
   */
  export type empleadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update empleados.
     */
    data: XOR<empleadosUpdateManyMutationInput, empleadosUncheckedUpdateManyInput>
    /**
     * Filter which empleados to update
     */
    where?: empleadosWhereInput
    /**
     * Limit how many empleados to update.
     */
    limit?: number
  }

  /**
   * empleados updateManyAndReturn
   */
  export type empleadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * The data used to update empleados.
     */
    data: XOR<empleadosUpdateManyMutationInput, empleadosUncheckedUpdateManyInput>
    /**
     * Filter which empleados to update
     */
    where?: empleadosWhereInput
    /**
     * Limit how many empleados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * empleados upsert
   */
  export type empleadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    /**
     * The filter to search for the empleados to update in case it exists.
     */
    where: empleadosWhereUniqueInput
    /**
     * In case the empleados found by the `where` argument doesn't exist, create a new empleados with this data.
     */
    create: XOR<empleadosCreateInput, empleadosUncheckedCreateInput>
    /**
     * In case the empleados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<empleadosUpdateInput, empleadosUncheckedUpdateInput>
  }

  /**
   * empleados delete
   */
  export type empleadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    /**
     * Filter which empleados to delete.
     */
    where: empleadosWhereUniqueInput
  }

  /**
   * empleados deleteMany
   */
  export type empleadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empleados to delete
     */
    where?: empleadosWhereInput
    /**
     * Limit how many empleados to delete.
     */
    limit?: number
  }

  /**
   * empleados.cierremensualdetalles
   */
  export type empleados$cierremensualdetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierremensualdetalles
     */
    select?: cierremensualdetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierremensualdetalles
     */
    omit?: cierremensualdetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierremensualdetallesInclude<ExtArgs> | null
    where?: cierremensualdetallesWhereInput
    orderBy?: cierremensualdetallesOrderByWithRelationInput | cierremensualdetallesOrderByWithRelationInput[]
    cursor?: cierremensualdetallesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CierremensualdetallesScalarFieldEnum | CierremensualdetallesScalarFieldEnum[]
  }

  /**
   * empleados.fichadas
   */
  export type empleados$fichadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    where?: fichadasWhereInput
    orderBy?: fichadasOrderByWithRelationInput | fichadasOrderByWithRelationInput[]
    cursor?: fichadasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FichadasScalarFieldEnum | FichadasScalarFieldEnum[]
  }

  /**
   * empleados.novedades
   */
  export type empleados$novedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    where?: novedadesWhereInput
    orderBy?: novedadesOrderByWithRelationInput | novedadesOrderByWithRelationInput[]
    cursor?: novedadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NovedadesScalarFieldEnum | NovedadesScalarFieldEnum[]
  }

  /**
   * empleados.usuarios
   */
  export type empleados$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    cursor?: usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * empleados without action
   */
  export type empleadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
  }


  /**
   * Model fichadas
   */

  export type AggregateFichadas = {
    _count: FichadasCountAggregateOutputType | null
    _avg: FichadasAvgAggregateOutputType | null
    _sum: FichadasSumAggregateOutputType | null
    _min: FichadasMinAggregateOutputType | null
    _max: FichadasMaxAggregateOutputType | null
  }

  export type FichadasAvgAggregateOutputType = {
    id: number | null
    empleadoid: number | null
    usuarioregistro: number | null
    fichadaoriginalid: number | null
  }

  export type FichadasSumAggregateOutputType = {
    id: number | null
    empleadoid: number | null
    usuarioregistro: number | null
    fichadaoriginalid: number | null
  }

  export type FichadasMinAggregateOutputType = {
    id: number | null
    empleadoid: number | null
    timestamp: Date | null
    tipo: string | null
    origen: string | null
    usuarioregistro: number | null
    motivo: string | null
    escorreccion: boolean | null
    fichadaoriginalid: number | null
  }

  export type FichadasMaxAggregateOutputType = {
    id: number | null
    empleadoid: number | null
    timestamp: Date | null
    tipo: string | null
    origen: string | null
    usuarioregistro: number | null
    motivo: string | null
    escorreccion: boolean | null
    fichadaoriginalid: number | null
  }

  export type FichadasCountAggregateOutputType = {
    id: number
    empleadoid: number
    timestamp: number
    tipo: number
    origen: number
    usuarioregistro: number
    motivo: number
    escorreccion: number
    fichadaoriginalid: number
    _all: number
  }


  export type FichadasAvgAggregateInputType = {
    id?: true
    empleadoid?: true
    usuarioregistro?: true
    fichadaoriginalid?: true
  }

  export type FichadasSumAggregateInputType = {
    id?: true
    empleadoid?: true
    usuarioregistro?: true
    fichadaoriginalid?: true
  }

  export type FichadasMinAggregateInputType = {
    id?: true
    empleadoid?: true
    timestamp?: true
    tipo?: true
    origen?: true
    usuarioregistro?: true
    motivo?: true
    escorreccion?: true
    fichadaoriginalid?: true
  }

  export type FichadasMaxAggregateInputType = {
    id?: true
    empleadoid?: true
    timestamp?: true
    tipo?: true
    origen?: true
    usuarioregistro?: true
    motivo?: true
    escorreccion?: true
    fichadaoriginalid?: true
  }

  export type FichadasCountAggregateInputType = {
    id?: true
    empleadoid?: true
    timestamp?: true
    tipo?: true
    origen?: true
    usuarioregistro?: true
    motivo?: true
    escorreccion?: true
    fichadaoriginalid?: true
    _all?: true
  }

  export type FichadasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fichadas to aggregate.
     */
    where?: fichadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fichadas to fetch.
     */
    orderBy?: fichadasOrderByWithRelationInput | fichadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fichadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fichadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fichadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fichadas
    **/
    _count?: true | FichadasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FichadasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FichadasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FichadasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FichadasMaxAggregateInputType
  }

  export type GetFichadasAggregateType<T extends FichadasAggregateArgs> = {
        [P in keyof T & keyof AggregateFichadas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFichadas[P]>
      : GetScalarType<T[P], AggregateFichadas[P]>
  }




  export type fichadasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fichadasWhereInput
    orderBy?: fichadasOrderByWithAggregationInput | fichadasOrderByWithAggregationInput[]
    by: FichadasScalarFieldEnum[] | FichadasScalarFieldEnum
    having?: fichadasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FichadasCountAggregateInputType | true
    _avg?: FichadasAvgAggregateInputType
    _sum?: FichadasSumAggregateInputType
    _min?: FichadasMinAggregateInputType
    _max?: FichadasMaxAggregateInputType
  }

  export type FichadasGroupByOutputType = {
    id: number
    empleadoid: number
    timestamp: Date
    tipo: string
    origen: string
    usuarioregistro: number | null
    motivo: string | null
    escorreccion: boolean
    fichadaoriginalid: number | null
    _count: FichadasCountAggregateOutputType | null
    _avg: FichadasAvgAggregateOutputType | null
    _sum: FichadasSumAggregateOutputType | null
    _min: FichadasMinAggregateOutputType | null
    _max: FichadasMaxAggregateOutputType | null
  }

  type GetFichadasGroupByPayload<T extends fichadasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FichadasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FichadasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FichadasGroupByOutputType[P]>
            : GetScalarType<T[P], FichadasGroupByOutputType[P]>
        }
      >
    >


  export type fichadasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoid?: boolean
    timestamp?: boolean
    tipo?: boolean
    origen?: boolean
    usuarioregistro?: boolean
    motivo?: boolean
    escorreccion?: boolean
    fichadaoriginalid?: boolean
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
    fichadas?: boolean | fichadas$fichadasArgs<ExtArgs>
    other_fichadas?: boolean | fichadas$other_fichadasArgs<ExtArgs>
    usuarios?: boolean | fichadas$usuariosArgs<ExtArgs>
    _count?: boolean | FichadasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fichadas"]>

  export type fichadasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoid?: boolean
    timestamp?: boolean
    tipo?: boolean
    origen?: boolean
    usuarioregistro?: boolean
    motivo?: boolean
    escorreccion?: boolean
    fichadaoriginalid?: boolean
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
    fichadas?: boolean | fichadas$fichadasArgs<ExtArgs>
    usuarios?: boolean | fichadas$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["fichadas"]>

  export type fichadasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoid?: boolean
    timestamp?: boolean
    tipo?: boolean
    origen?: boolean
    usuarioregistro?: boolean
    motivo?: boolean
    escorreccion?: boolean
    fichadaoriginalid?: boolean
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
    fichadas?: boolean | fichadas$fichadasArgs<ExtArgs>
    usuarios?: boolean | fichadas$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["fichadas"]>

  export type fichadasSelectScalar = {
    id?: boolean
    empleadoid?: boolean
    timestamp?: boolean
    tipo?: boolean
    origen?: boolean
    usuarioregistro?: boolean
    motivo?: boolean
    escorreccion?: boolean
    fichadaoriginalid?: boolean
  }

  export type fichadasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empleadoid" | "timestamp" | "tipo" | "origen" | "usuarioregistro" | "motivo" | "escorreccion" | "fichadaoriginalid", ExtArgs["result"]["fichadas"]>
  export type fichadasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
    fichadas?: boolean | fichadas$fichadasArgs<ExtArgs>
    other_fichadas?: boolean | fichadas$other_fichadasArgs<ExtArgs>
    usuarios?: boolean | fichadas$usuariosArgs<ExtArgs>
    _count?: boolean | FichadasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type fichadasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
    fichadas?: boolean | fichadas$fichadasArgs<ExtArgs>
    usuarios?: boolean | fichadas$usuariosArgs<ExtArgs>
  }
  export type fichadasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
    fichadas?: boolean | fichadas$fichadasArgs<ExtArgs>
    usuarios?: boolean | fichadas$usuariosArgs<ExtArgs>
  }

  export type $fichadasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fichadas"
    objects: {
      empleados: Prisma.$empleadosPayload<ExtArgs>
      fichadas: Prisma.$fichadasPayload<ExtArgs> | null
      other_fichadas: Prisma.$fichadasPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empleadoid: number
      timestamp: Date
      tipo: string
      origen: string
      usuarioregistro: number | null
      motivo: string | null
      escorreccion: boolean
      fichadaoriginalid: number | null
    }, ExtArgs["result"]["fichadas"]>
    composites: {}
  }

  type fichadasGetPayload<S extends boolean | null | undefined | fichadasDefaultArgs> = $Result.GetResult<Prisma.$fichadasPayload, S>

  type fichadasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fichadasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FichadasCountAggregateInputType | true
    }

  export interface fichadasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fichadas'], meta: { name: 'fichadas' } }
    /**
     * Find zero or one Fichadas that matches the filter.
     * @param {fichadasFindUniqueArgs} args - Arguments to find a Fichadas
     * @example
     * // Get one Fichadas
     * const fichadas = await prisma.fichadas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fichadasFindUniqueArgs>(args: SelectSubset<T, fichadasFindUniqueArgs<ExtArgs>>): Prisma__fichadasClient<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fichadas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fichadasFindUniqueOrThrowArgs} args - Arguments to find a Fichadas
     * @example
     * // Get one Fichadas
     * const fichadas = await prisma.fichadas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fichadasFindUniqueOrThrowArgs>(args: SelectSubset<T, fichadasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fichadasClient<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichadasFindFirstArgs} args - Arguments to find a Fichadas
     * @example
     * // Get one Fichadas
     * const fichadas = await prisma.fichadas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fichadasFindFirstArgs>(args?: SelectSubset<T, fichadasFindFirstArgs<ExtArgs>>): Prisma__fichadasClient<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichadas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichadasFindFirstOrThrowArgs} args - Arguments to find a Fichadas
     * @example
     * // Get one Fichadas
     * const fichadas = await prisma.fichadas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fichadasFindFirstOrThrowArgs>(args?: SelectSubset<T, fichadasFindFirstOrThrowArgs<ExtArgs>>): Prisma__fichadasClient<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fichadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichadasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fichadas
     * const fichadas = await prisma.fichadas.findMany()
     * 
     * // Get first 10 Fichadas
     * const fichadas = await prisma.fichadas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fichadasWithIdOnly = await prisma.fichadas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fichadasFindManyArgs>(args?: SelectSubset<T, fichadasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fichadas.
     * @param {fichadasCreateArgs} args - Arguments to create a Fichadas.
     * @example
     * // Create one Fichadas
     * const Fichadas = await prisma.fichadas.create({
     *   data: {
     *     // ... data to create a Fichadas
     *   }
     * })
     * 
     */
    create<T extends fichadasCreateArgs>(args: SelectSubset<T, fichadasCreateArgs<ExtArgs>>): Prisma__fichadasClient<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fichadas.
     * @param {fichadasCreateManyArgs} args - Arguments to create many Fichadas.
     * @example
     * // Create many Fichadas
     * const fichadas = await prisma.fichadas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fichadasCreateManyArgs>(args?: SelectSubset<T, fichadasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fichadas and returns the data saved in the database.
     * @param {fichadasCreateManyAndReturnArgs} args - Arguments to create many Fichadas.
     * @example
     * // Create many Fichadas
     * const fichadas = await prisma.fichadas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fichadas and only return the `id`
     * const fichadasWithIdOnly = await prisma.fichadas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fichadasCreateManyAndReturnArgs>(args?: SelectSubset<T, fichadasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fichadas.
     * @param {fichadasDeleteArgs} args - Arguments to delete one Fichadas.
     * @example
     * // Delete one Fichadas
     * const Fichadas = await prisma.fichadas.delete({
     *   where: {
     *     // ... filter to delete one Fichadas
     *   }
     * })
     * 
     */
    delete<T extends fichadasDeleteArgs>(args: SelectSubset<T, fichadasDeleteArgs<ExtArgs>>): Prisma__fichadasClient<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fichadas.
     * @param {fichadasUpdateArgs} args - Arguments to update one Fichadas.
     * @example
     * // Update one Fichadas
     * const fichadas = await prisma.fichadas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fichadasUpdateArgs>(args: SelectSubset<T, fichadasUpdateArgs<ExtArgs>>): Prisma__fichadasClient<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fichadas.
     * @param {fichadasDeleteManyArgs} args - Arguments to filter Fichadas to delete.
     * @example
     * // Delete a few Fichadas
     * const { count } = await prisma.fichadas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fichadasDeleteManyArgs>(args?: SelectSubset<T, fichadasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fichadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichadasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fichadas
     * const fichadas = await prisma.fichadas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fichadasUpdateManyArgs>(args: SelectSubset<T, fichadasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fichadas and returns the data updated in the database.
     * @param {fichadasUpdateManyAndReturnArgs} args - Arguments to update many Fichadas.
     * @example
     * // Update many Fichadas
     * const fichadas = await prisma.fichadas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fichadas and only return the `id`
     * const fichadasWithIdOnly = await prisma.fichadas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends fichadasUpdateManyAndReturnArgs>(args: SelectSubset<T, fichadasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fichadas.
     * @param {fichadasUpsertArgs} args - Arguments to update or create a Fichadas.
     * @example
     * // Update or create a Fichadas
     * const fichadas = await prisma.fichadas.upsert({
     *   create: {
     *     // ... data to create a Fichadas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fichadas we want to update
     *   }
     * })
     */
    upsert<T extends fichadasUpsertArgs>(args: SelectSubset<T, fichadasUpsertArgs<ExtArgs>>): Prisma__fichadasClient<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fichadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichadasCountArgs} args - Arguments to filter Fichadas to count.
     * @example
     * // Count the number of Fichadas
     * const count = await prisma.fichadas.count({
     *   where: {
     *     // ... the filter for the Fichadas we want to count
     *   }
     * })
    **/
    count<T extends fichadasCountArgs>(
      args?: Subset<T, fichadasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FichadasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fichadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichadasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FichadasAggregateArgs>(args: Subset<T, FichadasAggregateArgs>): Prisma.PrismaPromise<GetFichadasAggregateType<T>>

    /**
     * Group by Fichadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fichadasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fichadasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fichadasGroupByArgs['orderBy'] }
        : { orderBy?: fichadasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fichadasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFichadasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fichadas model
   */
  readonly fields: fichadasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fichadas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fichadasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleados<T extends empleadosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadosDefaultArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fichadas<T extends fichadas$fichadasArgs<ExtArgs> = {}>(args?: Subset<T, fichadas$fichadasArgs<ExtArgs>>): Prisma__fichadasClient<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_fichadas<T extends fichadas$other_fichadasArgs<ExtArgs> = {}>(args?: Subset<T, fichadas$other_fichadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends fichadas$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, fichadas$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fichadas model
   */
  interface fichadasFieldRefs {
    readonly id: FieldRef<"fichadas", 'Int'>
    readonly empleadoid: FieldRef<"fichadas", 'Int'>
    readonly timestamp: FieldRef<"fichadas", 'DateTime'>
    readonly tipo: FieldRef<"fichadas", 'String'>
    readonly origen: FieldRef<"fichadas", 'String'>
    readonly usuarioregistro: FieldRef<"fichadas", 'Int'>
    readonly motivo: FieldRef<"fichadas", 'String'>
    readonly escorreccion: FieldRef<"fichadas", 'Boolean'>
    readonly fichadaoriginalid: FieldRef<"fichadas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * fichadas findUnique
   */
  export type fichadasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    /**
     * Filter, which fichadas to fetch.
     */
    where: fichadasWhereUniqueInput
  }

  /**
   * fichadas findUniqueOrThrow
   */
  export type fichadasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    /**
     * Filter, which fichadas to fetch.
     */
    where: fichadasWhereUniqueInput
  }

  /**
   * fichadas findFirst
   */
  export type fichadasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    /**
     * Filter, which fichadas to fetch.
     */
    where?: fichadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fichadas to fetch.
     */
    orderBy?: fichadasOrderByWithRelationInput | fichadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fichadas.
     */
    cursor?: fichadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fichadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fichadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fichadas.
     */
    distinct?: FichadasScalarFieldEnum | FichadasScalarFieldEnum[]
  }

  /**
   * fichadas findFirstOrThrow
   */
  export type fichadasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    /**
     * Filter, which fichadas to fetch.
     */
    where?: fichadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fichadas to fetch.
     */
    orderBy?: fichadasOrderByWithRelationInput | fichadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fichadas.
     */
    cursor?: fichadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fichadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fichadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fichadas.
     */
    distinct?: FichadasScalarFieldEnum | FichadasScalarFieldEnum[]
  }

  /**
   * fichadas findMany
   */
  export type fichadasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    /**
     * Filter, which fichadas to fetch.
     */
    where?: fichadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fichadas to fetch.
     */
    orderBy?: fichadasOrderByWithRelationInput | fichadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fichadas.
     */
    cursor?: fichadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fichadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fichadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fichadas.
     */
    distinct?: FichadasScalarFieldEnum | FichadasScalarFieldEnum[]
  }

  /**
   * fichadas create
   */
  export type fichadasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    /**
     * The data needed to create a fichadas.
     */
    data: XOR<fichadasCreateInput, fichadasUncheckedCreateInput>
  }

  /**
   * fichadas createMany
   */
  export type fichadasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fichadas.
     */
    data: fichadasCreateManyInput | fichadasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fichadas createManyAndReturn
   */
  export type fichadasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * The data used to create many fichadas.
     */
    data: fichadasCreateManyInput | fichadasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * fichadas update
   */
  export type fichadasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    /**
     * The data needed to update a fichadas.
     */
    data: XOR<fichadasUpdateInput, fichadasUncheckedUpdateInput>
    /**
     * Choose, which fichadas to update.
     */
    where: fichadasWhereUniqueInput
  }

  /**
   * fichadas updateMany
   */
  export type fichadasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fichadas.
     */
    data: XOR<fichadasUpdateManyMutationInput, fichadasUncheckedUpdateManyInput>
    /**
     * Filter which fichadas to update
     */
    where?: fichadasWhereInput
    /**
     * Limit how many fichadas to update.
     */
    limit?: number
  }

  /**
   * fichadas updateManyAndReturn
   */
  export type fichadasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * The data used to update fichadas.
     */
    data: XOR<fichadasUpdateManyMutationInput, fichadasUncheckedUpdateManyInput>
    /**
     * Filter which fichadas to update
     */
    where?: fichadasWhereInput
    /**
     * Limit how many fichadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * fichadas upsert
   */
  export type fichadasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    /**
     * The filter to search for the fichadas to update in case it exists.
     */
    where: fichadasWhereUniqueInput
    /**
     * In case the fichadas found by the `where` argument doesn't exist, create a new fichadas with this data.
     */
    create: XOR<fichadasCreateInput, fichadasUncheckedCreateInput>
    /**
     * In case the fichadas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fichadasUpdateInput, fichadasUncheckedUpdateInput>
  }

  /**
   * fichadas delete
   */
  export type fichadasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    /**
     * Filter which fichadas to delete.
     */
    where: fichadasWhereUniqueInput
  }

  /**
   * fichadas deleteMany
   */
  export type fichadasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fichadas to delete
     */
    where?: fichadasWhereInput
    /**
     * Limit how many fichadas to delete.
     */
    limit?: number
  }

  /**
   * fichadas.fichadas
   */
  export type fichadas$fichadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    where?: fichadasWhereInput
  }

  /**
   * fichadas.other_fichadas
   */
  export type fichadas$other_fichadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    where?: fichadasWhereInput
    orderBy?: fichadasOrderByWithRelationInput | fichadasOrderByWithRelationInput[]
    cursor?: fichadasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FichadasScalarFieldEnum | FichadasScalarFieldEnum[]
  }

  /**
   * fichadas.usuarios
   */
  export type fichadas$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * fichadas without action
   */
  export type fichadasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
  }


  /**
   * Model horarios
   */

  export type AggregateHorarios = {
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  export type HorariosAvgAggregateOutputType = {
    id: number | null
    toleranciaentrada: number | null
    toleranciasalida: number | null
    minutosmindescanso: number | null
    umbralhorasextra: number | null
  }

  export type HorariosSumAggregateOutputType = {
    id: number | null
    toleranciaentrada: number | null
    toleranciasalida: number | null
    minutosmindescanso: number | null
    umbralhorasextra: number | null
  }

  export type HorariosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    diassemana: string | null
    horaentrada: Date | null
    horasalida: Date | null
    toleranciaentrada: number | null
    toleranciasalida: number | null
    descansoinicio: Date | null
    descansofin: Date | null
    minutosmindescanso: number | null
    umbralhorasextra: number | null
  }

  export type HorariosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    diassemana: string | null
    horaentrada: Date | null
    horasalida: Date | null
    toleranciaentrada: number | null
    toleranciasalida: number | null
    descansoinicio: Date | null
    descansofin: Date | null
    minutosmindescanso: number | null
    umbralhorasextra: number | null
  }

  export type HorariosCountAggregateOutputType = {
    id: number
    nombre: number
    tipo: number
    diassemana: number
    horaentrada: number
    horasalida: number
    toleranciaentrada: number
    toleranciasalida: number
    descansoinicio: number
    descansofin: number
    minutosmindescanso: number
    umbralhorasextra: number
    _all: number
  }


  export type HorariosAvgAggregateInputType = {
    id?: true
    toleranciaentrada?: true
    toleranciasalida?: true
    minutosmindescanso?: true
    umbralhorasextra?: true
  }

  export type HorariosSumAggregateInputType = {
    id?: true
    toleranciaentrada?: true
    toleranciasalida?: true
    minutosmindescanso?: true
    umbralhorasextra?: true
  }

  export type HorariosMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    diassemana?: true
    horaentrada?: true
    horasalida?: true
    toleranciaentrada?: true
    toleranciasalida?: true
    descansoinicio?: true
    descansofin?: true
    minutosmindescanso?: true
    umbralhorasextra?: true
  }

  export type HorariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    diassemana?: true
    horaentrada?: true
    horasalida?: true
    toleranciaentrada?: true
    toleranciasalida?: true
    descansoinicio?: true
    descansofin?: true
    minutosmindescanso?: true
    umbralhorasextra?: true
  }

  export type HorariosCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    diassemana?: true
    horaentrada?: true
    horasalida?: true
    toleranciaentrada?: true
    toleranciasalida?: true
    descansoinicio?: true
    descansofin?: true
    minutosmindescanso?: true
    umbralhorasextra?: true
    _all?: true
  }

  export type HorariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios to aggregate.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned horarios
    **/
    _count?: true | HorariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorariosMaxAggregateInputType
  }

  export type GetHorariosAggregateType<T extends HorariosAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarios[P]>
      : GetScalarType<T[P], AggregateHorarios[P]>
  }




  export type horariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: horariosWhereInput
    orderBy?: horariosOrderByWithAggregationInput | horariosOrderByWithAggregationInput[]
    by: HorariosScalarFieldEnum[] | HorariosScalarFieldEnum
    having?: horariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorariosCountAggregateInputType | true
    _avg?: HorariosAvgAggregateInputType
    _sum?: HorariosSumAggregateInputType
    _min?: HorariosMinAggregateInputType
    _max?: HorariosMaxAggregateInputType
  }

  export type HorariosGroupByOutputType = {
    id: number
    nombre: string
    tipo: string
    diassemana: string
    horaentrada: Date
    horasalida: Date
    toleranciaentrada: number
    toleranciasalida: number
    descansoinicio: Date | null
    descansofin: Date | null
    minutosmindescanso: number
    umbralhorasextra: number
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  type GetHorariosGroupByPayload<T extends horariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorariosGroupByOutputType[P]>
            : GetScalarType<T[P], HorariosGroupByOutputType[P]>
        }
      >
    >


  export type horariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    diassemana?: boolean
    horaentrada?: boolean
    horasalida?: boolean
    toleranciaentrada?: boolean
    toleranciasalida?: boolean
    descansoinicio?: boolean
    descansofin?: boolean
    minutosmindescanso?: boolean
    umbralhorasextra?: boolean
    empleados?: boolean | horarios$empleadosArgs<ExtArgs>
    _count?: boolean | HorariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarios"]>

  export type horariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    diassemana?: boolean
    horaentrada?: boolean
    horasalida?: boolean
    toleranciaentrada?: boolean
    toleranciasalida?: boolean
    descansoinicio?: boolean
    descansofin?: boolean
    minutosmindescanso?: boolean
    umbralhorasextra?: boolean
  }, ExtArgs["result"]["horarios"]>

  export type horariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    diassemana?: boolean
    horaentrada?: boolean
    horasalida?: boolean
    toleranciaentrada?: boolean
    toleranciasalida?: boolean
    descansoinicio?: boolean
    descansofin?: boolean
    minutosmindescanso?: boolean
    umbralhorasextra?: boolean
  }, ExtArgs["result"]["horarios"]>

  export type horariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    diassemana?: boolean
    horaentrada?: boolean
    horasalida?: boolean
    toleranciaentrada?: boolean
    toleranciasalida?: boolean
    descansoinicio?: boolean
    descansofin?: boolean
    minutosmindescanso?: boolean
    umbralhorasextra?: boolean
  }

  export type horariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "tipo" | "diassemana" | "horaentrada" | "horasalida" | "toleranciaentrada" | "toleranciasalida" | "descansoinicio" | "descansofin" | "minutosmindescanso" | "umbralhorasextra", ExtArgs["result"]["horarios"]>
  export type horariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | horarios$empleadosArgs<ExtArgs>
    _count?: boolean | HorariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type horariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type horariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $horariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "horarios"
    objects: {
      empleados: Prisma.$empleadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      tipo: string
      diassemana: string
      horaentrada: Date
      horasalida: Date
      toleranciaentrada: number
      toleranciasalida: number
      descansoinicio: Date | null
      descansofin: Date | null
      minutosmindescanso: number
      umbralhorasextra: number
    }, ExtArgs["result"]["horarios"]>
    composites: {}
  }

  type horariosGetPayload<S extends boolean | null | undefined | horariosDefaultArgs> = $Result.GetResult<Prisma.$horariosPayload, S>

  type horariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<horariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorariosCountAggregateInputType | true
    }

  export interface horariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['horarios'], meta: { name: 'horarios' } }
    /**
     * Find zero or one Horarios that matches the filter.
     * @param {horariosFindUniqueArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends horariosFindUniqueArgs>(args: SelectSubset<T, horariosFindUniqueArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {horariosFindUniqueOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends horariosFindUniqueOrThrowArgs>(args: SelectSubset<T, horariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindFirstArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends horariosFindFirstArgs>(args?: SelectSubset<T, horariosFindFirstArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindFirstOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends horariosFindFirstOrThrowArgs>(args?: SelectSubset<T, horariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios
     * const horarios = await prisma.horarios.findMany()
     * 
     * // Get first 10 Horarios
     * const horarios = await prisma.horarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horariosWithIdOnly = await prisma.horarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends horariosFindManyArgs>(args?: SelectSubset<T, horariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horarios.
     * @param {horariosCreateArgs} args - Arguments to create a Horarios.
     * @example
     * // Create one Horarios
     * const Horarios = await prisma.horarios.create({
     *   data: {
     *     // ... data to create a Horarios
     *   }
     * })
     * 
     */
    create<T extends horariosCreateArgs>(args: SelectSubset<T, horariosCreateArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horarios.
     * @param {horariosCreateManyArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horarios = await prisma.horarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends horariosCreateManyArgs>(args?: SelectSubset<T, horariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Horarios and returns the data saved in the database.
     * @param {horariosCreateManyAndReturnArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horarios = await prisma.horarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Horarios and only return the `id`
     * const horariosWithIdOnly = await prisma.horarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends horariosCreateManyAndReturnArgs>(args?: SelectSubset<T, horariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Horarios.
     * @param {horariosDeleteArgs} args - Arguments to delete one Horarios.
     * @example
     * // Delete one Horarios
     * const Horarios = await prisma.horarios.delete({
     *   where: {
     *     // ... filter to delete one Horarios
     *   }
     * })
     * 
     */
    delete<T extends horariosDeleteArgs>(args: SelectSubset<T, horariosDeleteArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horarios.
     * @param {horariosUpdateArgs} args - Arguments to update one Horarios.
     * @example
     * // Update one Horarios
     * const horarios = await prisma.horarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends horariosUpdateArgs>(args: SelectSubset<T, horariosUpdateArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horarios.
     * @param {horariosDeleteManyArgs} args - Arguments to filter Horarios to delete.
     * @example
     * // Delete a few Horarios
     * const { count } = await prisma.horarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends horariosDeleteManyArgs>(args?: SelectSubset<T, horariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios
     * const horarios = await prisma.horarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends horariosUpdateManyArgs>(args: SelectSubset<T, horariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios and returns the data updated in the database.
     * @param {horariosUpdateManyAndReturnArgs} args - Arguments to update many Horarios.
     * @example
     * // Update many Horarios
     * const horarios = await prisma.horarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Horarios and only return the `id`
     * const horariosWithIdOnly = await prisma.horarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends horariosUpdateManyAndReturnArgs>(args: SelectSubset<T, horariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Horarios.
     * @param {horariosUpsertArgs} args - Arguments to update or create a Horarios.
     * @example
     * // Update or create a Horarios
     * const horarios = await prisma.horarios.upsert({
     *   create: {
     *     // ... data to create a Horarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horarios we want to update
     *   }
     * })
     */
    upsert<T extends horariosUpsertArgs>(args: SelectSubset<T, horariosUpsertArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosCountArgs} args - Arguments to filter Horarios to count.
     * @example
     * // Count the number of Horarios
     * const count = await prisma.horarios.count({
     *   where: {
     *     // ... the filter for the Horarios we want to count
     *   }
     * })
    **/
    count<T extends horariosCountArgs>(
      args?: Subset<T, horariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorariosAggregateArgs>(args: Subset<T, HorariosAggregateArgs>): Prisma.PrismaPromise<GetHorariosAggregateType<T>>

    /**
     * Group by Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends horariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: horariosGroupByArgs['orderBy'] }
        : { orderBy?: horariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, horariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the horarios model
   */
  readonly fields: horariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for horarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__horariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleados<T extends horarios$empleadosArgs<ExtArgs> = {}>(args?: Subset<T, horarios$empleadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the horarios model
   */
  interface horariosFieldRefs {
    readonly id: FieldRef<"horarios", 'Int'>
    readonly nombre: FieldRef<"horarios", 'String'>
    readonly tipo: FieldRef<"horarios", 'String'>
    readonly diassemana: FieldRef<"horarios", 'String'>
    readonly horaentrada: FieldRef<"horarios", 'DateTime'>
    readonly horasalida: FieldRef<"horarios", 'DateTime'>
    readonly toleranciaentrada: FieldRef<"horarios", 'Int'>
    readonly toleranciasalida: FieldRef<"horarios", 'Int'>
    readonly descansoinicio: FieldRef<"horarios", 'DateTime'>
    readonly descansofin: FieldRef<"horarios", 'DateTime'>
    readonly minutosmindescanso: FieldRef<"horarios", 'Int'>
    readonly umbralhorasextra: FieldRef<"horarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * horarios findUnique
   */
  export type horariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios findUniqueOrThrow
   */
  export type horariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios findFirst
   */
  export type horariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios findFirstOrThrow
   */
  export type horariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios findMany
   */
  export type horariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios create
   */
  export type horariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * The data needed to create a horarios.
     */
    data: XOR<horariosCreateInput, horariosUncheckedCreateInput>
  }

  /**
   * horarios createMany
   */
  export type horariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many horarios.
     */
    data: horariosCreateManyInput | horariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * horarios createManyAndReturn
   */
  export type horariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * The data used to create many horarios.
     */
    data: horariosCreateManyInput | horariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * horarios update
   */
  export type horariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * The data needed to update a horarios.
     */
    data: XOR<horariosUpdateInput, horariosUncheckedUpdateInput>
    /**
     * Choose, which horarios to update.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios updateMany
   */
  export type horariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update horarios.
     */
    data: XOR<horariosUpdateManyMutationInput, horariosUncheckedUpdateManyInput>
    /**
     * Filter which horarios to update
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to update.
     */
    limit?: number
  }

  /**
   * horarios updateManyAndReturn
   */
  export type horariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * The data used to update horarios.
     */
    data: XOR<horariosUpdateManyMutationInput, horariosUncheckedUpdateManyInput>
    /**
     * Filter which horarios to update
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to update.
     */
    limit?: number
  }

  /**
   * horarios upsert
   */
  export type horariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * The filter to search for the horarios to update in case it exists.
     */
    where: horariosWhereUniqueInput
    /**
     * In case the horarios found by the `where` argument doesn't exist, create a new horarios with this data.
     */
    create: XOR<horariosCreateInput, horariosUncheckedCreateInput>
    /**
     * In case the horarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<horariosUpdateInput, horariosUncheckedUpdateInput>
  }

  /**
   * horarios delete
   */
  export type horariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter which horarios to delete.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios deleteMany
   */
  export type horariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios to delete
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to delete.
     */
    limit?: number
  }

  /**
   * horarios.empleados
   */
  export type horarios$empleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    where?: empleadosWhereInput
    orderBy?: empleadosOrderByWithRelationInput | empleadosOrderByWithRelationInput[]
    cursor?: empleadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpleadosScalarFieldEnum | EmpleadosScalarFieldEnum[]
  }

  /**
   * horarios without action
   */
  export type horariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
  }


  /**
   * Model novedades
   */

  export type AggregateNovedades = {
    _count: NovedadesCountAggregateOutputType | null
    _avg: NovedadesAvgAggregateOutputType | null
    _sum: NovedadesSumAggregateOutputType | null
    _min: NovedadesMinAggregateOutputType | null
    _max: NovedadesMaxAggregateOutputType | null
  }

  export type NovedadesAvgAggregateOutputType = {
    id: number | null
    empleadoid: number | null
    cantidad: Decimal | null
  }

  export type NovedadesSumAggregateOutputType = {
    id: number | null
    empleadoid: number | null
    cantidad: Decimal | null
  }

  export type NovedadesMinAggregateOutputType = {
    id: number | null
    empleadoid: number | null
    tipo: string | null
    fechasafectadas: string | null
    cantidad: Decimal | null
    unidad: string | null
    estado: string | null
    origen: string | null
    observacion: string | null
    periodo: string | null
  }

  export type NovedadesMaxAggregateOutputType = {
    id: number | null
    empleadoid: number | null
    tipo: string | null
    fechasafectadas: string | null
    cantidad: Decimal | null
    unidad: string | null
    estado: string | null
    origen: string | null
    observacion: string | null
    periodo: string | null
  }

  export type NovedadesCountAggregateOutputType = {
    id: number
    empleadoid: number
    tipo: number
    fechasafectadas: number
    cantidad: number
    unidad: number
    estado: number
    origen: number
    observacion: number
    periodo: number
    _all: number
  }


  export type NovedadesAvgAggregateInputType = {
    id?: true
    empleadoid?: true
    cantidad?: true
  }

  export type NovedadesSumAggregateInputType = {
    id?: true
    empleadoid?: true
    cantidad?: true
  }

  export type NovedadesMinAggregateInputType = {
    id?: true
    empleadoid?: true
    tipo?: true
    fechasafectadas?: true
    cantidad?: true
    unidad?: true
    estado?: true
    origen?: true
    observacion?: true
    periodo?: true
  }

  export type NovedadesMaxAggregateInputType = {
    id?: true
    empleadoid?: true
    tipo?: true
    fechasafectadas?: true
    cantidad?: true
    unidad?: true
    estado?: true
    origen?: true
    observacion?: true
    periodo?: true
  }

  export type NovedadesCountAggregateInputType = {
    id?: true
    empleadoid?: true
    tipo?: true
    fechasafectadas?: true
    cantidad?: true
    unidad?: true
    estado?: true
    origen?: true
    observacion?: true
    periodo?: true
    _all?: true
  }

  export type NovedadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which novedades to aggregate.
     */
    where?: novedadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novedades to fetch.
     */
    orderBy?: novedadesOrderByWithRelationInput | novedadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: novedadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned novedades
    **/
    _count?: true | NovedadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NovedadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NovedadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NovedadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NovedadesMaxAggregateInputType
  }

  export type GetNovedadesAggregateType<T extends NovedadesAggregateArgs> = {
        [P in keyof T & keyof AggregateNovedades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNovedades[P]>
      : GetScalarType<T[P], AggregateNovedades[P]>
  }




  export type novedadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: novedadesWhereInput
    orderBy?: novedadesOrderByWithAggregationInput | novedadesOrderByWithAggregationInput[]
    by: NovedadesScalarFieldEnum[] | NovedadesScalarFieldEnum
    having?: novedadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NovedadesCountAggregateInputType | true
    _avg?: NovedadesAvgAggregateInputType
    _sum?: NovedadesSumAggregateInputType
    _min?: NovedadesMinAggregateInputType
    _max?: NovedadesMaxAggregateInputType
  }

  export type NovedadesGroupByOutputType = {
    id: number
    empleadoid: number
    tipo: string
    fechasafectadas: string
    cantidad: Decimal
    unidad: string
    estado: string
    origen: string
    observacion: string | null
    periodo: string
    _count: NovedadesCountAggregateOutputType | null
    _avg: NovedadesAvgAggregateOutputType | null
    _sum: NovedadesSumAggregateOutputType | null
    _min: NovedadesMinAggregateOutputType | null
    _max: NovedadesMaxAggregateOutputType | null
  }

  type GetNovedadesGroupByPayload<T extends novedadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NovedadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NovedadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NovedadesGroupByOutputType[P]>
            : GetScalarType<T[P], NovedadesGroupByOutputType[P]>
        }
      >
    >


  export type novedadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoid?: boolean
    tipo?: boolean
    fechasafectadas?: boolean
    cantidad?: boolean
    unidad?: boolean
    estado?: boolean
    origen?: boolean
    observacion?: boolean
    periodo?: boolean
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["novedades"]>

  export type novedadesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoid?: boolean
    tipo?: boolean
    fechasafectadas?: boolean
    cantidad?: boolean
    unidad?: boolean
    estado?: boolean
    origen?: boolean
    observacion?: boolean
    periodo?: boolean
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["novedades"]>

  export type novedadesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoid?: boolean
    tipo?: boolean
    fechasafectadas?: boolean
    cantidad?: boolean
    unidad?: boolean
    estado?: boolean
    origen?: boolean
    observacion?: boolean
    periodo?: boolean
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["novedades"]>

  export type novedadesSelectScalar = {
    id?: boolean
    empleadoid?: boolean
    tipo?: boolean
    fechasafectadas?: boolean
    cantidad?: boolean
    unidad?: boolean
    estado?: boolean
    origen?: boolean
    observacion?: boolean
    periodo?: boolean
  }

  export type novedadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empleadoid" | "tipo" | "fechasafectadas" | "cantidad" | "unidad" | "estado" | "origen" | "observacion" | "periodo", ExtArgs["result"]["novedades"]>
  export type novedadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }
  export type novedadesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }
  export type novedadesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | empleadosDefaultArgs<ExtArgs>
  }

  export type $novedadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "novedades"
    objects: {
      empleados: Prisma.$empleadosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empleadoid: number
      tipo: string
      fechasafectadas: string
      cantidad: Prisma.Decimal
      unidad: string
      estado: string
      origen: string
      observacion: string | null
      periodo: string
    }, ExtArgs["result"]["novedades"]>
    composites: {}
  }

  type novedadesGetPayload<S extends boolean | null | undefined | novedadesDefaultArgs> = $Result.GetResult<Prisma.$novedadesPayload, S>

  type novedadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<novedadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NovedadesCountAggregateInputType | true
    }

  export interface novedadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['novedades'], meta: { name: 'novedades' } }
    /**
     * Find zero or one Novedades that matches the filter.
     * @param {novedadesFindUniqueArgs} args - Arguments to find a Novedades
     * @example
     * // Get one Novedades
     * const novedades = await prisma.novedades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends novedadesFindUniqueArgs>(args: SelectSubset<T, novedadesFindUniqueArgs<ExtArgs>>): Prisma__novedadesClient<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Novedades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {novedadesFindUniqueOrThrowArgs} args - Arguments to find a Novedades
     * @example
     * // Get one Novedades
     * const novedades = await prisma.novedades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends novedadesFindUniqueOrThrowArgs>(args: SelectSubset<T, novedadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__novedadesClient<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novedades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadesFindFirstArgs} args - Arguments to find a Novedades
     * @example
     * // Get one Novedades
     * const novedades = await prisma.novedades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends novedadesFindFirstArgs>(args?: SelectSubset<T, novedadesFindFirstArgs<ExtArgs>>): Prisma__novedadesClient<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novedades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadesFindFirstOrThrowArgs} args - Arguments to find a Novedades
     * @example
     * // Get one Novedades
     * const novedades = await prisma.novedades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends novedadesFindFirstOrThrowArgs>(args?: SelectSubset<T, novedadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__novedadesClient<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Novedades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Novedades
     * const novedades = await prisma.novedades.findMany()
     * 
     * // Get first 10 Novedades
     * const novedades = await prisma.novedades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const novedadesWithIdOnly = await prisma.novedades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends novedadesFindManyArgs>(args?: SelectSubset<T, novedadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Novedades.
     * @param {novedadesCreateArgs} args - Arguments to create a Novedades.
     * @example
     * // Create one Novedades
     * const Novedades = await prisma.novedades.create({
     *   data: {
     *     // ... data to create a Novedades
     *   }
     * })
     * 
     */
    create<T extends novedadesCreateArgs>(args: SelectSubset<T, novedadesCreateArgs<ExtArgs>>): Prisma__novedadesClient<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Novedades.
     * @param {novedadesCreateManyArgs} args - Arguments to create many Novedades.
     * @example
     * // Create many Novedades
     * const novedades = await prisma.novedades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends novedadesCreateManyArgs>(args?: SelectSubset<T, novedadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Novedades and returns the data saved in the database.
     * @param {novedadesCreateManyAndReturnArgs} args - Arguments to create many Novedades.
     * @example
     * // Create many Novedades
     * const novedades = await prisma.novedades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Novedades and only return the `id`
     * const novedadesWithIdOnly = await prisma.novedades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends novedadesCreateManyAndReturnArgs>(args?: SelectSubset<T, novedadesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Novedades.
     * @param {novedadesDeleteArgs} args - Arguments to delete one Novedades.
     * @example
     * // Delete one Novedades
     * const Novedades = await prisma.novedades.delete({
     *   where: {
     *     // ... filter to delete one Novedades
     *   }
     * })
     * 
     */
    delete<T extends novedadesDeleteArgs>(args: SelectSubset<T, novedadesDeleteArgs<ExtArgs>>): Prisma__novedadesClient<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Novedades.
     * @param {novedadesUpdateArgs} args - Arguments to update one Novedades.
     * @example
     * // Update one Novedades
     * const novedades = await prisma.novedades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends novedadesUpdateArgs>(args: SelectSubset<T, novedadesUpdateArgs<ExtArgs>>): Prisma__novedadesClient<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Novedades.
     * @param {novedadesDeleteManyArgs} args - Arguments to filter Novedades to delete.
     * @example
     * // Delete a few Novedades
     * const { count } = await prisma.novedades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends novedadesDeleteManyArgs>(args?: SelectSubset<T, novedadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Novedades
     * const novedades = await prisma.novedades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends novedadesUpdateManyArgs>(args: SelectSubset<T, novedadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novedades and returns the data updated in the database.
     * @param {novedadesUpdateManyAndReturnArgs} args - Arguments to update many Novedades.
     * @example
     * // Update many Novedades
     * const novedades = await prisma.novedades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Novedades and only return the `id`
     * const novedadesWithIdOnly = await prisma.novedades.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends novedadesUpdateManyAndReturnArgs>(args: SelectSubset<T, novedadesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Novedades.
     * @param {novedadesUpsertArgs} args - Arguments to update or create a Novedades.
     * @example
     * // Update or create a Novedades
     * const novedades = await prisma.novedades.upsert({
     *   create: {
     *     // ... data to create a Novedades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Novedades we want to update
     *   }
     * })
     */
    upsert<T extends novedadesUpsertArgs>(args: SelectSubset<T, novedadesUpsertArgs<ExtArgs>>): Prisma__novedadesClient<$Result.GetResult<Prisma.$novedadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Novedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadesCountArgs} args - Arguments to filter Novedades to count.
     * @example
     * // Count the number of Novedades
     * const count = await prisma.novedades.count({
     *   where: {
     *     // ... the filter for the Novedades we want to count
     *   }
     * })
    **/
    count<T extends novedadesCountArgs>(
      args?: Subset<T, novedadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NovedadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Novedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovedadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NovedadesAggregateArgs>(args: Subset<T, NovedadesAggregateArgs>): Prisma.PrismaPromise<GetNovedadesAggregateType<T>>

    /**
     * Group by Novedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends novedadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: novedadesGroupByArgs['orderBy'] }
        : { orderBy?: novedadesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, novedadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNovedadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the novedades model
   */
  readonly fields: novedadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for novedades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__novedadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleados<T extends empleadosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadosDefaultArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the novedades model
   */
  interface novedadesFieldRefs {
    readonly id: FieldRef<"novedades", 'Int'>
    readonly empleadoid: FieldRef<"novedades", 'Int'>
    readonly tipo: FieldRef<"novedades", 'String'>
    readonly fechasafectadas: FieldRef<"novedades", 'String'>
    readonly cantidad: FieldRef<"novedades", 'Decimal'>
    readonly unidad: FieldRef<"novedades", 'String'>
    readonly estado: FieldRef<"novedades", 'String'>
    readonly origen: FieldRef<"novedades", 'String'>
    readonly observacion: FieldRef<"novedades", 'String'>
    readonly periodo: FieldRef<"novedades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * novedades findUnique
   */
  export type novedadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    /**
     * Filter, which novedades to fetch.
     */
    where: novedadesWhereUniqueInput
  }

  /**
   * novedades findUniqueOrThrow
   */
  export type novedadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    /**
     * Filter, which novedades to fetch.
     */
    where: novedadesWhereUniqueInput
  }

  /**
   * novedades findFirst
   */
  export type novedadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    /**
     * Filter, which novedades to fetch.
     */
    where?: novedadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novedades to fetch.
     */
    orderBy?: novedadesOrderByWithRelationInput | novedadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for novedades.
     */
    cursor?: novedadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of novedades.
     */
    distinct?: NovedadesScalarFieldEnum | NovedadesScalarFieldEnum[]
  }

  /**
   * novedades findFirstOrThrow
   */
  export type novedadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    /**
     * Filter, which novedades to fetch.
     */
    where?: novedadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novedades to fetch.
     */
    orderBy?: novedadesOrderByWithRelationInput | novedadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for novedades.
     */
    cursor?: novedadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of novedades.
     */
    distinct?: NovedadesScalarFieldEnum | NovedadesScalarFieldEnum[]
  }

  /**
   * novedades findMany
   */
  export type novedadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    /**
     * Filter, which novedades to fetch.
     */
    where?: novedadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novedades to fetch.
     */
    orderBy?: novedadesOrderByWithRelationInput | novedadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing novedades.
     */
    cursor?: novedadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of novedades.
     */
    distinct?: NovedadesScalarFieldEnum | NovedadesScalarFieldEnum[]
  }

  /**
   * novedades create
   */
  export type novedadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    /**
     * The data needed to create a novedades.
     */
    data: XOR<novedadesCreateInput, novedadesUncheckedCreateInput>
  }

  /**
   * novedades createMany
   */
  export type novedadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many novedades.
     */
    data: novedadesCreateManyInput | novedadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * novedades createManyAndReturn
   */
  export type novedadesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * The data used to create many novedades.
     */
    data: novedadesCreateManyInput | novedadesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * novedades update
   */
  export type novedadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    /**
     * The data needed to update a novedades.
     */
    data: XOR<novedadesUpdateInput, novedadesUncheckedUpdateInput>
    /**
     * Choose, which novedades to update.
     */
    where: novedadesWhereUniqueInput
  }

  /**
   * novedades updateMany
   */
  export type novedadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update novedades.
     */
    data: XOR<novedadesUpdateManyMutationInput, novedadesUncheckedUpdateManyInput>
    /**
     * Filter which novedades to update
     */
    where?: novedadesWhereInput
    /**
     * Limit how many novedades to update.
     */
    limit?: number
  }

  /**
   * novedades updateManyAndReturn
   */
  export type novedadesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * The data used to update novedades.
     */
    data: XOR<novedadesUpdateManyMutationInput, novedadesUncheckedUpdateManyInput>
    /**
     * Filter which novedades to update
     */
    where?: novedadesWhereInput
    /**
     * Limit how many novedades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * novedades upsert
   */
  export type novedadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    /**
     * The filter to search for the novedades to update in case it exists.
     */
    where: novedadesWhereUniqueInput
    /**
     * In case the novedades found by the `where` argument doesn't exist, create a new novedades with this data.
     */
    create: XOR<novedadesCreateInput, novedadesUncheckedCreateInput>
    /**
     * In case the novedades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<novedadesUpdateInput, novedadesUncheckedUpdateInput>
  }

  /**
   * novedades delete
   */
  export type novedadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
    /**
     * Filter which novedades to delete.
     */
    where: novedadesWhereUniqueInput
  }

  /**
   * novedades deleteMany
   */
  export type novedadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which novedades to delete
     */
    where?: novedadesWhereInput
    /**
     * Limit how many novedades to delete.
     */
    limit?: number
  }

  /**
   * novedades without action
   */
  export type novedadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedades
     */
    select?: novedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedades
     */
    omit?: novedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadesInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
    empleadoid: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
    empleadoid: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    passwordhash: string | null
    rol: string | null
    empleadoid: number | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    passwordhash: string | null
    rol: string | null
    empleadoid: number | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    passwordhash: number
    rol: number
    empleadoid: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
    empleadoid?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
    empleadoid?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordhash?: true
    rol?: true
    empleadoid?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordhash?: true
    rol?: true
    empleadoid?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordhash?: true
    rol?: true
    empleadoid?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nombre: string
    email: string
    passwordhash: string
    rol: string
    empleadoid: number | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordhash?: boolean
    rol?: boolean
    empleadoid?: boolean
    cierresmensuales?: boolean | usuarios$cierresmensualesArgs<ExtArgs>
    fichadas?: boolean | usuarios$fichadasArgs<ExtArgs>
    empleados?: boolean | usuarios$empleadosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordhash?: boolean
    rol?: boolean
    empleadoid?: boolean
    empleados?: boolean | usuarios$empleadosArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordhash?: boolean
    rol?: boolean
    empleadoid?: boolean
    empleados?: boolean | usuarios$empleadosArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordhash?: boolean
    rol?: boolean
    empleadoid?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "passwordhash" | "rol" | "empleadoid", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cierresmensuales?: boolean | usuarios$cierresmensualesArgs<ExtArgs>
    fichadas?: boolean | usuarios$fichadasArgs<ExtArgs>
    empleados?: boolean | usuarios$empleadosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | usuarios$empleadosArgs<ExtArgs>
  }
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | usuarios$empleadosArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      cierresmensuales: Prisma.$cierresmensualesPayload<ExtArgs>[]
      fichadas: Prisma.$fichadasPayload<ExtArgs>[]
      empleados: Prisma.$empleadosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      passwordhash: string
      rol: string
      empleadoid: number | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cierresmensuales<T extends usuarios$cierresmensualesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$cierresmensualesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cierresmensualesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fichadas<T extends usuarios$fichadasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$fichadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fichadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    empleados<T extends usuarios$empleadosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$empleadosArgs<ExtArgs>>): Prisma__empleadosClient<$Result.GetResult<Prisma.$empleadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly passwordhash: FieldRef<"usuarios", 'String'>
    readonly rol: FieldRef<"usuarios", 'String'>
    readonly empleadoid: FieldRef<"usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.cierresmensuales
   */
  export type usuarios$cierresmensualesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cierresmensuales
     */
    select?: cierresmensualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cierresmensuales
     */
    omit?: cierresmensualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cierresmensualesInclude<ExtArgs> | null
    where?: cierresmensualesWhereInput
    orderBy?: cierresmensualesOrderByWithRelationInput | cierresmensualesOrderByWithRelationInput[]
    cursor?: cierresmensualesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CierresmensualesScalarFieldEnum | CierresmensualesScalarFieldEnum[]
  }

  /**
   * usuarios.fichadas
   */
  export type usuarios$fichadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fichadas
     */
    select?: fichadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fichadas
     */
    omit?: fichadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fichadasInclude<ExtArgs> | null
    where?: fichadasWhereInput
    orderBy?: fichadasOrderByWithRelationInput | fichadasOrderByWithRelationInput[]
    cursor?: fichadasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FichadasScalarFieldEnum | FichadasScalarFieldEnum[]
  }

  /**
   * usuarios.empleados
   */
  export type usuarios$empleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleados
     */
    select?: empleadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleados
     */
    omit?: empleadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadosInclude<ExtArgs> | null
    where?: empleadosWhereInput
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CierremensualdetallesScalarFieldEnum: {
    id: 'id',
    cierremensualid: 'cierremensualid',
    empleadoid: 'empleadoid',
    diastrabajados: 'diastrabajados',
    ausenciasjustificadas: 'ausenciasjustificadas',
    ausenciasinjustificadas: 'ausenciasinjustificadas',
    horasextra50: 'horasextra50',
    horasextra100: 'horasextra100',
    tardanzasacumuladas: 'tardanzasacumuladas'
  };

  export type CierremensualdetallesScalarFieldEnum = (typeof CierremensualdetallesScalarFieldEnum)[keyof typeof CierremensualdetallesScalarFieldEnum]


  export const CierresmensualesScalarFieldEnum: {
    id: 'id',
    periodo: 'periodo',
    fechacierre: 'fechacierre',
    usuariocierreid: 'usuariocierreid',
    estado: 'estado'
  };

  export type CierresmensualesScalarFieldEnum = (typeof CierresmensualesScalarFieldEnum)[keyof typeof CierresmensualesScalarFieldEnum]


  export const EmpleadosScalarFieldEnum: {
    id: 'id',
    legajo: 'legajo',
    nombre: 'nombre',
    apellido: 'apellido',
    dni: 'dni',
    cuil: 'cuil',
    fechaingreso: 'fechaingreso',
    categorialaboral: 'categorialaboral',
    convenio: 'convenio',
    tipojornada: 'tipojornada',
    horarioid: 'horarioid',
    diasdescanso: 'diasdescanso',
    modalidadfichada: 'modalidadfichada',
    estado: 'estado'
  };

  export type EmpleadosScalarFieldEnum = (typeof EmpleadosScalarFieldEnum)[keyof typeof EmpleadosScalarFieldEnum]


  export const FichadasScalarFieldEnum: {
    id: 'id',
    empleadoid: 'empleadoid',
    timestamp: 'timestamp',
    tipo: 'tipo',
    origen: 'origen',
    usuarioregistro: 'usuarioregistro',
    motivo: 'motivo',
    escorreccion: 'escorreccion',
    fichadaoriginalid: 'fichadaoriginalid'
  };

  export type FichadasScalarFieldEnum = (typeof FichadasScalarFieldEnum)[keyof typeof FichadasScalarFieldEnum]


  export const HorariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo: 'tipo',
    diassemana: 'diassemana',
    horaentrada: 'horaentrada',
    horasalida: 'horasalida',
    toleranciaentrada: 'toleranciaentrada',
    toleranciasalida: 'toleranciasalida',
    descansoinicio: 'descansoinicio',
    descansofin: 'descansofin',
    minutosmindescanso: 'minutosmindescanso',
    umbralhorasextra: 'umbralhorasextra'
  };

  export type HorariosScalarFieldEnum = (typeof HorariosScalarFieldEnum)[keyof typeof HorariosScalarFieldEnum]


  export const NovedadesScalarFieldEnum: {
    id: 'id',
    empleadoid: 'empleadoid',
    tipo: 'tipo',
    fechasafectadas: 'fechasafectadas',
    cantidad: 'cantidad',
    unidad: 'unidad',
    estado: 'estado',
    origen: 'origen',
    observacion: 'observacion',
    periodo: 'periodo'
  };

  export type NovedadesScalarFieldEnum = (typeof NovedadesScalarFieldEnum)[keyof typeof NovedadesScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    passwordhash: 'passwordhash',
    rol: 'rol',
    empleadoid: 'empleadoid'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type cierremensualdetallesWhereInput = {
    AND?: cierremensualdetallesWhereInput | cierremensualdetallesWhereInput[]
    OR?: cierremensualdetallesWhereInput[]
    NOT?: cierremensualdetallesWhereInput | cierremensualdetallesWhereInput[]
    id?: IntFilter<"cierremensualdetalles"> | number
    cierremensualid?: IntFilter<"cierremensualdetalles"> | number
    empleadoid?: IntFilter<"cierremensualdetalles"> | number
    diastrabajados?: IntFilter<"cierremensualdetalles"> | number
    ausenciasjustificadas?: IntFilter<"cierremensualdetalles"> | number
    ausenciasinjustificadas?: IntFilter<"cierremensualdetalles"> | number
    horasextra50?: IntFilter<"cierremensualdetalles"> | number
    horasextra100?: IntFilter<"cierremensualdetalles"> | number
    tardanzasacumuladas?: IntFilter<"cierremensualdetalles"> | number
    cierresmensuales?: XOR<CierresmensualesScalarRelationFilter, cierresmensualesWhereInput>
    empleados?: XOR<EmpleadosScalarRelationFilter, empleadosWhereInput>
  }

  export type cierremensualdetallesOrderByWithRelationInput = {
    id?: SortOrder
    cierremensualid?: SortOrder
    empleadoid?: SortOrder
    diastrabajados?: SortOrder
    ausenciasjustificadas?: SortOrder
    ausenciasinjustificadas?: SortOrder
    horasextra50?: SortOrder
    horasextra100?: SortOrder
    tardanzasacumuladas?: SortOrder
    cierresmensuales?: cierresmensualesOrderByWithRelationInput
    empleados?: empleadosOrderByWithRelationInput
  }

  export type cierremensualdetallesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cierremensualdetallesWhereInput | cierremensualdetallesWhereInput[]
    OR?: cierremensualdetallesWhereInput[]
    NOT?: cierremensualdetallesWhereInput | cierremensualdetallesWhereInput[]
    cierremensualid?: IntFilter<"cierremensualdetalles"> | number
    empleadoid?: IntFilter<"cierremensualdetalles"> | number
    diastrabajados?: IntFilter<"cierremensualdetalles"> | number
    ausenciasjustificadas?: IntFilter<"cierremensualdetalles"> | number
    ausenciasinjustificadas?: IntFilter<"cierremensualdetalles"> | number
    horasextra50?: IntFilter<"cierremensualdetalles"> | number
    horasextra100?: IntFilter<"cierremensualdetalles"> | number
    tardanzasacumuladas?: IntFilter<"cierremensualdetalles"> | number
    cierresmensuales?: XOR<CierresmensualesScalarRelationFilter, cierresmensualesWhereInput>
    empleados?: XOR<EmpleadosScalarRelationFilter, empleadosWhereInput>
  }, "id">

  export type cierremensualdetallesOrderByWithAggregationInput = {
    id?: SortOrder
    cierremensualid?: SortOrder
    empleadoid?: SortOrder
    diastrabajados?: SortOrder
    ausenciasjustificadas?: SortOrder
    ausenciasinjustificadas?: SortOrder
    horasextra50?: SortOrder
    horasextra100?: SortOrder
    tardanzasacumuladas?: SortOrder
    _count?: cierremensualdetallesCountOrderByAggregateInput
    _avg?: cierremensualdetallesAvgOrderByAggregateInput
    _max?: cierremensualdetallesMaxOrderByAggregateInput
    _min?: cierremensualdetallesMinOrderByAggregateInput
    _sum?: cierremensualdetallesSumOrderByAggregateInput
  }

  export type cierremensualdetallesScalarWhereWithAggregatesInput = {
    AND?: cierremensualdetallesScalarWhereWithAggregatesInput | cierremensualdetallesScalarWhereWithAggregatesInput[]
    OR?: cierremensualdetallesScalarWhereWithAggregatesInput[]
    NOT?: cierremensualdetallesScalarWhereWithAggregatesInput | cierremensualdetallesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cierremensualdetalles"> | number
    cierremensualid?: IntWithAggregatesFilter<"cierremensualdetalles"> | number
    empleadoid?: IntWithAggregatesFilter<"cierremensualdetalles"> | number
    diastrabajados?: IntWithAggregatesFilter<"cierremensualdetalles"> | number
    ausenciasjustificadas?: IntWithAggregatesFilter<"cierremensualdetalles"> | number
    ausenciasinjustificadas?: IntWithAggregatesFilter<"cierremensualdetalles"> | number
    horasextra50?: IntWithAggregatesFilter<"cierremensualdetalles"> | number
    horasextra100?: IntWithAggregatesFilter<"cierremensualdetalles"> | number
    tardanzasacumuladas?: IntWithAggregatesFilter<"cierremensualdetalles"> | number
  }

  export type cierresmensualesWhereInput = {
    AND?: cierresmensualesWhereInput | cierresmensualesWhereInput[]
    OR?: cierresmensualesWhereInput[]
    NOT?: cierresmensualesWhereInput | cierresmensualesWhereInput[]
    id?: IntFilter<"cierresmensuales"> | number
    periodo?: StringFilter<"cierresmensuales"> | string
    fechacierre?: DateTimeNullableFilter<"cierresmensuales"> | Date | string | null
    usuariocierreid?: IntNullableFilter<"cierresmensuales"> | number | null
    estado?: StringFilter<"cierresmensuales"> | string
    cierremensualdetalles?: CierremensualdetallesListRelationFilter
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type cierresmensualesOrderByWithRelationInput = {
    id?: SortOrder
    periodo?: SortOrder
    fechacierre?: SortOrderInput | SortOrder
    usuariocierreid?: SortOrderInput | SortOrder
    estado?: SortOrder
    cierremensualdetalles?: cierremensualdetallesOrderByRelationAggregateInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type cierresmensualesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cierresmensualesWhereInput | cierresmensualesWhereInput[]
    OR?: cierresmensualesWhereInput[]
    NOT?: cierresmensualesWhereInput | cierresmensualesWhereInput[]
    periodo?: StringFilter<"cierresmensuales"> | string
    fechacierre?: DateTimeNullableFilter<"cierresmensuales"> | Date | string | null
    usuariocierreid?: IntNullableFilter<"cierresmensuales"> | number | null
    estado?: StringFilter<"cierresmensuales"> | string
    cierremensualdetalles?: CierremensualdetallesListRelationFilter
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id">

  export type cierresmensualesOrderByWithAggregationInput = {
    id?: SortOrder
    periodo?: SortOrder
    fechacierre?: SortOrderInput | SortOrder
    usuariocierreid?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: cierresmensualesCountOrderByAggregateInput
    _avg?: cierresmensualesAvgOrderByAggregateInput
    _max?: cierresmensualesMaxOrderByAggregateInput
    _min?: cierresmensualesMinOrderByAggregateInput
    _sum?: cierresmensualesSumOrderByAggregateInput
  }

  export type cierresmensualesScalarWhereWithAggregatesInput = {
    AND?: cierresmensualesScalarWhereWithAggregatesInput | cierresmensualesScalarWhereWithAggregatesInput[]
    OR?: cierresmensualesScalarWhereWithAggregatesInput[]
    NOT?: cierresmensualesScalarWhereWithAggregatesInput | cierresmensualesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cierresmensuales"> | number
    periodo?: StringWithAggregatesFilter<"cierresmensuales"> | string
    fechacierre?: DateTimeNullableWithAggregatesFilter<"cierresmensuales"> | Date | string | null
    usuariocierreid?: IntNullableWithAggregatesFilter<"cierresmensuales"> | number | null
    estado?: StringWithAggregatesFilter<"cierresmensuales"> | string
  }

  export type empleadosWhereInput = {
    AND?: empleadosWhereInput | empleadosWhereInput[]
    OR?: empleadosWhereInput[]
    NOT?: empleadosWhereInput | empleadosWhereInput[]
    id?: IntFilter<"empleados"> | number
    legajo?: StringFilter<"empleados"> | string
    nombre?: StringFilter<"empleados"> | string
    apellido?: StringFilter<"empleados"> | string
    dni?: StringFilter<"empleados"> | string
    cuil?: StringFilter<"empleados"> | string
    fechaingreso?: DateTimeFilter<"empleados"> | Date | string
    categorialaboral?: StringFilter<"empleados"> | string
    convenio?: StringNullableFilter<"empleados"> | string | null
    tipojornada?: StringFilter<"empleados"> | string
    horarioid?: IntFilter<"empleados"> | number
    diasdescanso?: StringFilter<"empleados"> | string
    modalidadfichada?: StringFilter<"empleados"> | string
    estado?: StringFilter<"empleados"> | string
    cierremensualdetalles?: CierremensualdetallesListRelationFilter
    horarios?: XOR<HorariosScalarRelationFilter, horariosWhereInput>
    fichadas?: FichadasListRelationFilter
    novedades?: NovedadesListRelationFilter
    usuarios?: UsuariosListRelationFilter
  }

  export type empleadosOrderByWithRelationInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    fechaingreso?: SortOrder
    categorialaboral?: SortOrder
    convenio?: SortOrderInput | SortOrder
    tipojornada?: SortOrder
    horarioid?: SortOrder
    diasdescanso?: SortOrder
    modalidadfichada?: SortOrder
    estado?: SortOrder
    cierremensualdetalles?: cierremensualdetallesOrderByRelationAggregateInput
    horarios?: horariosOrderByWithRelationInput
    fichadas?: fichadasOrderByRelationAggregateInput
    novedades?: novedadesOrderByRelationAggregateInput
    usuarios?: usuariosOrderByRelationAggregateInput
  }

  export type empleadosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    legajo?: string
    dni?: string
    cuil?: string
    AND?: empleadosWhereInput | empleadosWhereInput[]
    OR?: empleadosWhereInput[]
    NOT?: empleadosWhereInput | empleadosWhereInput[]
    nombre?: StringFilter<"empleados"> | string
    apellido?: StringFilter<"empleados"> | string
    fechaingreso?: DateTimeFilter<"empleados"> | Date | string
    categorialaboral?: StringFilter<"empleados"> | string
    convenio?: StringNullableFilter<"empleados"> | string | null
    tipojornada?: StringFilter<"empleados"> | string
    horarioid?: IntFilter<"empleados"> | number
    diasdescanso?: StringFilter<"empleados"> | string
    modalidadfichada?: StringFilter<"empleados"> | string
    estado?: StringFilter<"empleados"> | string
    cierremensualdetalles?: CierremensualdetallesListRelationFilter
    horarios?: XOR<HorariosScalarRelationFilter, horariosWhereInput>
    fichadas?: FichadasListRelationFilter
    novedades?: NovedadesListRelationFilter
    usuarios?: UsuariosListRelationFilter
  }, "id" | "legajo" | "dni" | "cuil">

  export type empleadosOrderByWithAggregationInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    fechaingreso?: SortOrder
    categorialaboral?: SortOrder
    convenio?: SortOrderInput | SortOrder
    tipojornada?: SortOrder
    horarioid?: SortOrder
    diasdescanso?: SortOrder
    modalidadfichada?: SortOrder
    estado?: SortOrder
    _count?: empleadosCountOrderByAggregateInput
    _avg?: empleadosAvgOrderByAggregateInput
    _max?: empleadosMaxOrderByAggregateInput
    _min?: empleadosMinOrderByAggregateInput
    _sum?: empleadosSumOrderByAggregateInput
  }

  export type empleadosScalarWhereWithAggregatesInput = {
    AND?: empleadosScalarWhereWithAggregatesInput | empleadosScalarWhereWithAggregatesInput[]
    OR?: empleadosScalarWhereWithAggregatesInput[]
    NOT?: empleadosScalarWhereWithAggregatesInput | empleadosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"empleados"> | number
    legajo?: StringWithAggregatesFilter<"empleados"> | string
    nombre?: StringWithAggregatesFilter<"empleados"> | string
    apellido?: StringWithAggregatesFilter<"empleados"> | string
    dni?: StringWithAggregatesFilter<"empleados"> | string
    cuil?: StringWithAggregatesFilter<"empleados"> | string
    fechaingreso?: DateTimeWithAggregatesFilter<"empleados"> | Date | string
    categorialaboral?: StringWithAggregatesFilter<"empleados"> | string
    convenio?: StringNullableWithAggregatesFilter<"empleados"> | string | null
    tipojornada?: StringWithAggregatesFilter<"empleados"> | string
    horarioid?: IntWithAggregatesFilter<"empleados"> | number
    diasdescanso?: StringWithAggregatesFilter<"empleados"> | string
    modalidadfichada?: StringWithAggregatesFilter<"empleados"> | string
    estado?: StringWithAggregatesFilter<"empleados"> | string
  }

  export type fichadasWhereInput = {
    AND?: fichadasWhereInput | fichadasWhereInput[]
    OR?: fichadasWhereInput[]
    NOT?: fichadasWhereInput | fichadasWhereInput[]
    id?: IntFilter<"fichadas"> | number
    empleadoid?: IntFilter<"fichadas"> | number
    timestamp?: DateTimeFilter<"fichadas"> | Date | string
    tipo?: StringFilter<"fichadas"> | string
    origen?: StringFilter<"fichadas"> | string
    usuarioregistro?: IntNullableFilter<"fichadas"> | number | null
    motivo?: StringNullableFilter<"fichadas"> | string | null
    escorreccion?: BoolFilter<"fichadas"> | boolean
    fichadaoriginalid?: IntNullableFilter<"fichadas"> | number | null
    empleados?: XOR<EmpleadosScalarRelationFilter, empleadosWhereInput>
    fichadas?: XOR<FichadasNullableScalarRelationFilter, fichadasWhereInput> | null
    other_fichadas?: FichadasListRelationFilter
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type fichadasOrderByWithRelationInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    timestamp?: SortOrder
    tipo?: SortOrder
    origen?: SortOrder
    usuarioregistro?: SortOrderInput | SortOrder
    motivo?: SortOrderInput | SortOrder
    escorreccion?: SortOrder
    fichadaoriginalid?: SortOrderInput | SortOrder
    empleados?: empleadosOrderByWithRelationInput
    fichadas?: fichadasOrderByWithRelationInput
    other_fichadas?: fichadasOrderByRelationAggregateInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type fichadasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: fichadasWhereInput | fichadasWhereInput[]
    OR?: fichadasWhereInput[]
    NOT?: fichadasWhereInput | fichadasWhereInput[]
    empleadoid?: IntFilter<"fichadas"> | number
    timestamp?: DateTimeFilter<"fichadas"> | Date | string
    tipo?: StringFilter<"fichadas"> | string
    origen?: StringFilter<"fichadas"> | string
    usuarioregistro?: IntNullableFilter<"fichadas"> | number | null
    motivo?: StringNullableFilter<"fichadas"> | string | null
    escorreccion?: BoolFilter<"fichadas"> | boolean
    fichadaoriginalid?: IntNullableFilter<"fichadas"> | number | null
    empleados?: XOR<EmpleadosScalarRelationFilter, empleadosWhereInput>
    fichadas?: XOR<FichadasNullableScalarRelationFilter, fichadasWhereInput> | null
    other_fichadas?: FichadasListRelationFilter
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id">

  export type fichadasOrderByWithAggregationInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    timestamp?: SortOrder
    tipo?: SortOrder
    origen?: SortOrder
    usuarioregistro?: SortOrderInput | SortOrder
    motivo?: SortOrderInput | SortOrder
    escorreccion?: SortOrder
    fichadaoriginalid?: SortOrderInput | SortOrder
    _count?: fichadasCountOrderByAggregateInput
    _avg?: fichadasAvgOrderByAggregateInput
    _max?: fichadasMaxOrderByAggregateInput
    _min?: fichadasMinOrderByAggregateInput
    _sum?: fichadasSumOrderByAggregateInput
  }

  export type fichadasScalarWhereWithAggregatesInput = {
    AND?: fichadasScalarWhereWithAggregatesInput | fichadasScalarWhereWithAggregatesInput[]
    OR?: fichadasScalarWhereWithAggregatesInput[]
    NOT?: fichadasScalarWhereWithAggregatesInput | fichadasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"fichadas"> | number
    empleadoid?: IntWithAggregatesFilter<"fichadas"> | number
    timestamp?: DateTimeWithAggregatesFilter<"fichadas"> | Date | string
    tipo?: StringWithAggregatesFilter<"fichadas"> | string
    origen?: StringWithAggregatesFilter<"fichadas"> | string
    usuarioregistro?: IntNullableWithAggregatesFilter<"fichadas"> | number | null
    motivo?: StringNullableWithAggregatesFilter<"fichadas"> | string | null
    escorreccion?: BoolWithAggregatesFilter<"fichadas"> | boolean
    fichadaoriginalid?: IntNullableWithAggregatesFilter<"fichadas"> | number | null
  }

  export type horariosWhereInput = {
    AND?: horariosWhereInput | horariosWhereInput[]
    OR?: horariosWhereInput[]
    NOT?: horariosWhereInput | horariosWhereInput[]
    id?: IntFilter<"horarios"> | number
    nombre?: StringFilter<"horarios"> | string
    tipo?: StringFilter<"horarios"> | string
    diassemana?: StringFilter<"horarios"> | string
    horaentrada?: DateTimeFilter<"horarios"> | Date | string
    horasalida?: DateTimeFilter<"horarios"> | Date | string
    toleranciaentrada?: IntFilter<"horarios"> | number
    toleranciasalida?: IntFilter<"horarios"> | number
    descansoinicio?: DateTimeNullableFilter<"horarios"> | Date | string | null
    descansofin?: DateTimeNullableFilter<"horarios"> | Date | string | null
    minutosmindescanso?: IntFilter<"horarios"> | number
    umbralhorasextra?: IntFilter<"horarios"> | number
    empleados?: EmpleadosListRelationFilter
  }

  export type horariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    diassemana?: SortOrder
    horaentrada?: SortOrder
    horasalida?: SortOrder
    toleranciaentrada?: SortOrder
    toleranciasalida?: SortOrder
    descansoinicio?: SortOrderInput | SortOrder
    descansofin?: SortOrderInput | SortOrder
    minutosmindescanso?: SortOrder
    umbralhorasextra?: SortOrder
    empleados?: empleadosOrderByRelationAggregateInput
  }

  export type horariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: horariosWhereInput | horariosWhereInput[]
    OR?: horariosWhereInput[]
    NOT?: horariosWhereInput | horariosWhereInput[]
    nombre?: StringFilter<"horarios"> | string
    tipo?: StringFilter<"horarios"> | string
    diassemana?: StringFilter<"horarios"> | string
    horaentrada?: DateTimeFilter<"horarios"> | Date | string
    horasalida?: DateTimeFilter<"horarios"> | Date | string
    toleranciaentrada?: IntFilter<"horarios"> | number
    toleranciasalida?: IntFilter<"horarios"> | number
    descansoinicio?: DateTimeNullableFilter<"horarios"> | Date | string | null
    descansofin?: DateTimeNullableFilter<"horarios"> | Date | string | null
    minutosmindescanso?: IntFilter<"horarios"> | number
    umbralhorasextra?: IntFilter<"horarios"> | number
    empleados?: EmpleadosListRelationFilter
  }, "id">

  export type horariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    diassemana?: SortOrder
    horaentrada?: SortOrder
    horasalida?: SortOrder
    toleranciaentrada?: SortOrder
    toleranciasalida?: SortOrder
    descansoinicio?: SortOrderInput | SortOrder
    descansofin?: SortOrderInput | SortOrder
    minutosmindescanso?: SortOrder
    umbralhorasextra?: SortOrder
    _count?: horariosCountOrderByAggregateInput
    _avg?: horariosAvgOrderByAggregateInput
    _max?: horariosMaxOrderByAggregateInput
    _min?: horariosMinOrderByAggregateInput
    _sum?: horariosSumOrderByAggregateInput
  }

  export type horariosScalarWhereWithAggregatesInput = {
    AND?: horariosScalarWhereWithAggregatesInput | horariosScalarWhereWithAggregatesInput[]
    OR?: horariosScalarWhereWithAggregatesInput[]
    NOT?: horariosScalarWhereWithAggregatesInput | horariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"horarios"> | number
    nombre?: StringWithAggregatesFilter<"horarios"> | string
    tipo?: StringWithAggregatesFilter<"horarios"> | string
    diassemana?: StringWithAggregatesFilter<"horarios"> | string
    horaentrada?: DateTimeWithAggregatesFilter<"horarios"> | Date | string
    horasalida?: DateTimeWithAggregatesFilter<"horarios"> | Date | string
    toleranciaentrada?: IntWithAggregatesFilter<"horarios"> | number
    toleranciasalida?: IntWithAggregatesFilter<"horarios"> | number
    descansoinicio?: DateTimeNullableWithAggregatesFilter<"horarios"> | Date | string | null
    descansofin?: DateTimeNullableWithAggregatesFilter<"horarios"> | Date | string | null
    minutosmindescanso?: IntWithAggregatesFilter<"horarios"> | number
    umbralhorasextra?: IntWithAggregatesFilter<"horarios"> | number
  }

  export type novedadesWhereInput = {
    AND?: novedadesWhereInput | novedadesWhereInput[]
    OR?: novedadesWhereInput[]
    NOT?: novedadesWhereInput | novedadesWhereInput[]
    id?: IntFilter<"novedades"> | number
    empleadoid?: IntFilter<"novedades"> | number
    tipo?: StringFilter<"novedades"> | string
    fechasafectadas?: StringFilter<"novedades"> | string
    cantidad?: DecimalFilter<"novedades"> | Decimal | DecimalJsLike | number | string
    unidad?: StringFilter<"novedades"> | string
    estado?: StringFilter<"novedades"> | string
    origen?: StringFilter<"novedades"> | string
    observacion?: StringNullableFilter<"novedades"> | string | null
    periodo?: StringFilter<"novedades"> | string
    empleados?: XOR<EmpleadosScalarRelationFilter, empleadosWhereInput>
  }

  export type novedadesOrderByWithRelationInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    tipo?: SortOrder
    fechasafectadas?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    estado?: SortOrder
    origen?: SortOrder
    observacion?: SortOrderInput | SortOrder
    periodo?: SortOrder
    empleados?: empleadosOrderByWithRelationInput
  }

  export type novedadesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: novedadesWhereInput | novedadesWhereInput[]
    OR?: novedadesWhereInput[]
    NOT?: novedadesWhereInput | novedadesWhereInput[]
    empleadoid?: IntFilter<"novedades"> | number
    tipo?: StringFilter<"novedades"> | string
    fechasafectadas?: StringFilter<"novedades"> | string
    cantidad?: DecimalFilter<"novedades"> | Decimal | DecimalJsLike | number | string
    unidad?: StringFilter<"novedades"> | string
    estado?: StringFilter<"novedades"> | string
    origen?: StringFilter<"novedades"> | string
    observacion?: StringNullableFilter<"novedades"> | string | null
    periodo?: StringFilter<"novedades"> | string
    empleados?: XOR<EmpleadosScalarRelationFilter, empleadosWhereInput>
  }, "id">

  export type novedadesOrderByWithAggregationInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    tipo?: SortOrder
    fechasafectadas?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    estado?: SortOrder
    origen?: SortOrder
    observacion?: SortOrderInput | SortOrder
    periodo?: SortOrder
    _count?: novedadesCountOrderByAggregateInput
    _avg?: novedadesAvgOrderByAggregateInput
    _max?: novedadesMaxOrderByAggregateInput
    _min?: novedadesMinOrderByAggregateInput
    _sum?: novedadesSumOrderByAggregateInput
  }

  export type novedadesScalarWhereWithAggregatesInput = {
    AND?: novedadesScalarWhereWithAggregatesInput | novedadesScalarWhereWithAggregatesInput[]
    OR?: novedadesScalarWhereWithAggregatesInput[]
    NOT?: novedadesScalarWhereWithAggregatesInput | novedadesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"novedades"> | number
    empleadoid?: IntWithAggregatesFilter<"novedades"> | number
    tipo?: StringWithAggregatesFilter<"novedades"> | string
    fechasafectadas?: StringWithAggregatesFilter<"novedades"> | string
    cantidad?: DecimalWithAggregatesFilter<"novedades"> | Decimal | DecimalJsLike | number | string
    unidad?: StringWithAggregatesFilter<"novedades"> | string
    estado?: StringWithAggregatesFilter<"novedades"> | string
    origen?: StringWithAggregatesFilter<"novedades"> | string
    observacion?: StringNullableWithAggregatesFilter<"novedades"> | string | null
    periodo?: StringWithAggregatesFilter<"novedades"> | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    passwordhash?: StringFilter<"usuarios"> | string
    rol?: StringFilter<"usuarios"> | string
    empleadoid?: IntNullableFilter<"usuarios"> | number | null
    cierresmensuales?: CierresmensualesListRelationFilter
    fichadas?: FichadasListRelationFilter
    empleados?: XOR<EmpleadosNullableScalarRelationFilter, empleadosWhereInput> | null
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordhash?: SortOrder
    rol?: SortOrder
    empleadoid?: SortOrderInput | SortOrder
    cierresmensuales?: cierresmensualesOrderByRelationAggregateInput
    fichadas?: fichadasOrderByRelationAggregateInput
    empleados?: empleadosOrderByWithRelationInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringFilter<"usuarios"> | string
    passwordhash?: StringFilter<"usuarios"> | string
    rol?: StringFilter<"usuarios"> | string
    empleadoid?: IntNullableFilter<"usuarios"> | number | null
    cierresmensuales?: CierresmensualesListRelationFilter
    fichadas?: FichadasListRelationFilter
    empleados?: XOR<EmpleadosNullableScalarRelationFilter, empleadosWhereInput> | null
  }, "id" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordhash?: SortOrder
    rol?: SortOrder
    empleadoid?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    passwordhash?: StringWithAggregatesFilter<"usuarios"> | string
    rol?: StringWithAggregatesFilter<"usuarios"> | string
    empleadoid?: IntNullableWithAggregatesFilter<"usuarios"> | number | null
  }

  export type cierremensualdetallesCreateInput = {
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
    cierresmensuales: cierresmensualesCreateNestedOneWithoutCierremensualdetallesInput
    empleados: empleadosCreateNestedOneWithoutCierremensualdetallesInput
  }

  export type cierremensualdetallesUncheckedCreateInput = {
    id?: number
    cierremensualid: number
    empleadoid: number
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
  }

  export type cierremensualdetallesUpdateInput = {
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
    cierresmensuales?: cierresmensualesUpdateOneRequiredWithoutCierremensualdetallesNestedInput
    empleados?: empleadosUpdateOneRequiredWithoutCierremensualdetallesNestedInput
  }

  export type cierremensualdetallesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cierremensualid?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
  }

  export type cierremensualdetallesCreateManyInput = {
    id?: number
    cierremensualid: number
    empleadoid: number
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
  }

  export type cierremensualdetallesUpdateManyMutationInput = {
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
  }

  export type cierremensualdetallesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cierremensualid?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
  }

  export type cierresmensualesCreateInput = {
    periodo: string
    fechacierre?: Date | string | null
    estado: string
    cierremensualdetalles?: cierremensualdetallesCreateNestedManyWithoutCierresmensualesInput
    usuarios?: usuariosCreateNestedOneWithoutCierresmensualesInput
  }

  export type cierresmensualesUncheckedCreateInput = {
    id?: number
    periodo: string
    fechacierre?: Date | string | null
    usuariocierreid?: number | null
    estado: string
    cierremensualdetalles?: cierremensualdetallesUncheckedCreateNestedManyWithoutCierresmensualesInput
  }

  export type cierresmensualesUpdateInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    fechacierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUpdateManyWithoutCierresmensualesNestedInput
    usuarios?: usuariosUpdateOneWithoutCierresmensualesNestedInput
  }

  export type cierresmensualesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: StringFieldUpdateOperationsInput | string
    fechacierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuariocierreid?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUncheckedUpdateManyWithoutCierresmensualesNestedInput
  }

  export type cierresmensualesCreateManyInput = {
    id?: number
    periodo: string
    fechacierre?: Date | string | null
    usuariocierreid?: number | null
    estado: string
  }

  export type cierresmensualesUpdateManyMutationInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    fechacierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type cierresmensualesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: StringFieldUpdateOperationsInput | string
    fechacierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuariocierreid?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type empleadosCreateInput = {
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesCreateNestedManyWithoutEmpleadosInput
    horarios: horariosCreateNestedOneWithoutEmpleadosInput
    fichadas?: fichadasCreateNestedManyWithoutEmpleadosInput
    novedades?: novedadesCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosUncheckedCreateInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    horarioid: number
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesUncheckedCreateNestedManyWithoutEmpleadosInput
    fichadas?: fichadasUncheckedCreateNestedManyWithoutEmpleadosInput
    novedades?: novedadesUncheckedCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosUncheckedCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosUpdateInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUpdateManyWithoutEmpleadosNestedInput
    horarios?: horariosUpdateOneRequiredWithoutEmpleadosNestedInput
    fichadas?: fichadasUpdateManyWithoutEmpleadosNestedInput
    novedades?: novedadesUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUpdateManyWithoutEmpleadosNestedInput
  }

  export type empleadosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    horarioid?: IntFieldUpdateOperationsInput | number
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUncheckedUpdateManyWithoutEmpleadosNestedInput
    fichadas?: fichadasUncheckedUpdateManyWithoutEmpleadosNestedInput
    novedades?: novedadesUncheckedUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUncheckedUpdateManyWithoutEmpleadosNestedInput
  }

  export type empleadosCreateManyInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    horarioid: number
    diasdescanso: string
    modalidadfichada: string
    estado: string
  }

  export type empleadosUpdateManyMutationInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type empleadosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    horarioid?: IntFieldUpdateOperationsInput | number
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type fichadasCreateInput = {
    timestamp: Date | string
    tipo: string
    origen: string
    motivo?: string | null
    escorreccion?: boolean
    empleados: empleadosCreateNestedOneWithoutFichadasInput
    fichadas?: fichadasCreateNestedOneWithoutOther_fichadasInput
    other_fichadas?: fichadasCreateNestedManyWithoutFichadasInput
    usuarios?: usuariosCreateNestedOneWithoutFichadasInput
  }

  export type fichadasUncheckedCreateInput = {
    id?: number
    empleadoid: number
    timestamp: Date | string
    tipo: string
    origen: string
    usuarioregistro?: number | null
    motivo?: string | null
    escorreccion?: boolean
    fichadaoriginalid?: number | null
    other_fichadas?: fichadasUncheckedCreateNestedManyWithoutFichadasInput
  }

  export type fichadasUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    empleados?: empleadosUpdateOneRequiredWithoutFichadasNestedInput
    fichadas?: fichadasUpdateOneWithoutOther_fichadasNestedInput
    other_fichadas?: fichadasUpdateManyWithoutFichadasNestedInput
    usuarios?: usuariosUpdateOneWithoutFichadasNestedInput
  }

  export type fichadasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    usuarioregistro?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    fichadaoriginalid?: NullableIntFieldUpdateOperationsInput | number | null
    other_fichadas?: fichadasUncheckedUpdateManyWithoutFichadasNestedInput
  }

  export type fichadasCreateManyInput = {
    id?: number
    empleadoid: number
    timestamp: Date | string
    tipo: string
    origen: string
    usuarioregistro?: number | null
    motivo?: string | null
    escorreccion?: boolean
    fichadaoriginalid?: number | null
  }

  export type fichadasUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
  }

  export type fichadasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    usuarioregistro?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    fichadaoriginalid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type horariosCreateInput = {
    nombre: string
    tipo: string
    diassemana: string
    horaentrada: Date | string
    horasalida: Date | string
    toleranciaentrada: number
    toleranciasalida: number
    descansoinicio?: Date | string | null
    descansofin?: Date | string | null
    minutosmindescanso: number
    umbralhorasextra: number
    empleados?: empleadosCreateNestedManyWithoutHorariosInput
  }

  export type horariosUncheckedCreateInput = {
    id?: number
    nombre: string
    tipo: string
    diassemana: string
    horaentrada: Date | string
    horasalida: Date | string
    toleranciaentrada: number
    toleranciasalida: number
    descansoinicio?: Date | string | null
    descansofin?: Date | string | null
    minutosmindescanso: number
    umbralhorasextra: number
    empleados?: empleadosUncheckedCreateNestedManyWithoutHorariosInput
  }

  export type horariosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    diassemana?: StringFieldUpdateOperationsInput | string
    horaentrada?: DateTimeFieldUpdateOperationsInput | Date | string
    horasalida?: DateTimeFieldUpdateOperationsInput | Date | string
    toleranciaentrada?: IntFieldUpdateOperationsInput | number
    toleranciasalida?: IntFieldUpdateOperationsInput | number
    descansoinicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descansofin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutosmindescanso?: IntFieldUpdateOperationsInput | number
    umbralhorasextra?: IntFieldUpdateOperationsInput | number
    empleados?: empleadosUpdateManyWithoutHorariosNestedInput
  }

  export type horariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    diassemana?: StringFieldUpdateOperationsInput | string
    horaentrada?: DateTimeFieldUpdateOperationsInput | Date | string
    horasalida?: DateTimeFieldUpdateOperationsInput | Date | string
    toleranciaentrada?: IntFieldUpdateOperationsInput | number
    toleranciasalida?: IntFieldUpdateOperationsInput | number
    descansoinicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descansofin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutosmindescanso?: IntFieldUpdateOperationsInput | number
    umbralhorasextra?: IntFieldUpdateOperationsInput | number
    empleados?: empleadosUncheckedUpdateManyWithoutHorariosNestedInput
  }

  export type horariosCreateManyInput = {
    id?: number
    nombre: string
    tipo: string
    diassemana: string
    horaentrada: Date | string
    horasalida: Date | string
    toleranciaentrada: number
    toleranciasalida: number
    descansoinicio?: Date | string | null
    descansofin?: Date | string | null
    minutosmindescanso: number
    umbralhorasextra: number
  }

  export type horariosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    diassemana?: StringFieldUpdateOperationsInput | string
    horaentrada?: DateTimeFieldUpdateOperationsInput | Date | string
    horasalida?: DateTimeFieldUpdateOperationsInput | Date | string
    toleranciaentrada?: IntFieldUpdateOperationsInput | number
    toleranciasalida?: IntFieldUpdateOperationsInput | number
    descansoinicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descansofin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutosmindescanso?: IntFieldUpdateOperationsInput | number
    umbralhorasextra?: IntFieldUpdateOperationsInput | number
  }

  export type horariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    diassemana?: StringFieldUpdateOperationsInput | string
    horaentrada?: DateTimeFieldUpdateOperationsInput | Date | string
    horasalida?: DateTimeFieldUpdateOperationsInput | Date | string
    toleranciaentrada?: IntFieldUpdateOperationsInput | number
    toleranciasalida?: IntFieldUpdateOperationsInput | number
    descansoinicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descansofin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutosmindescanso?: IntFieldUpdateOperationsInput | number
    umbralhorasextra?: IntFieldUpdateOperationsInput | number
  }

  export type novedadesCreateInput = {
    tipo: string
    fechasafectadas: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad: string
    estado: string
    origen: string
    observacion?: string | null
    periodo: string
    empleados: empleadosCreateNestedOneWithoutNovedadesInput
  }

  export type novedadesUncheckedCreateInput = {
    id?: number
    empleadoid: number
    tipo: string
    fechasafectadas: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad: string
    estado: string
    origen: string
    observacion?: string | null
    periodo: string
  }

  export type novedadesUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    fechasafectadas?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    periodo?: StringFieldUpdateOperationsInput | string
    empleados?: empleadosUpdateOneRequiredWithoutNovedadesNestedInput
  }

  export type novedadesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    fechasafectadas?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    periodo?: StringFieldUpdateOperationsInput | string
  }

  export type novedadesCreateManyInput = {
    id?: number
    empleadoid: number
    tipo: string
    fechasafectadas: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad: string
    estado: string
    origen: string
    observacion?: string | null
    periodo: string
  }

  export type novedadesUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    fechasafectadas?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    periodo?: StringFieldUpdateOperationsInput | string
  }

  export type novedadesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    fechasafectadas?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    periodo?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosCreateInput = {
    nombre: string
    email: string
    passwordhash: string
    rol: string
    cierresmensuales?: cierresmensualesCreateNestedManyWithoutUsuariosInput
    fichadas?: fichadasCreateNestedManyWithoutUsuariosInput
    empleados?: empleadosCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    passwordhash: string
    rol: string
    empleadoid?: number | null
    cierresmensuales?: cierresmensualesUncheckedCreateNestedManyWithoutUsuariosInput
    fichadas?: fichadasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    cierresmensuales?: cierresmensualesUpdateManyWithoutUsuariosNestedInput
    fichadas?: fichadasUpdateManyWithoutUsuariosNestedInput
    empleados?: empleadosUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empleadoid?: NullableIntFieldUpdateOperationsInput | number | null
    cierresmensuales?: cierresmensualesUncheckedUpdateManyWithoutUsuariosNestedInput
    fichadas?: fichadasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nombre: string
    email: string
    passwordhash: string
    rol: string
    empleadoid?: number | null
  }

  export type usuariosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empleadoid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CierresmensualesScalarRelationFilter = {
    is?: cierresmensualesWhereInput
    isNot?: cierresmensualesWhereInput
  }

  export type EmpleadosScalarRelationFilter = {
    is?: empleadosWhereInput
    isNot?: empleadosWhereInput
  }

  export type cierremensualdetallesCountOrderByAggregateInput = {
    id?: SortOrder
    cierremensualid?: SortOrder
    empleadoid?: SortOrder
    diastrabajados?: SortOrder
    ausenciasjustificadas?: SortOrder
    ausenciasinjustificadas?: SortOrder
    horasextra50?: SortOrder
    horasextra100?: SortOrder
    tardanzasacumuladas?: SortOrder
  }

  export type cierremensualdetallesAvgOrderByAggregateInput = {
    id?: SortOrder
    cierremensualid?: SortOrder
    empleadoid?: SortOrder
    diastrabajados?: SortOrder
    ausenciasjustificadas?: SortOrder
    ausenciasinjustificadas?: SortOrder
    horasextra50?: SortOrder
    horasextra100?: SortOrder
    tardanzasacumuladas?: SortOrder
  }

  export type cierremensualdetallesMaxOrderByAggregateInput = {
    id?: SortOrder
    cierremensualid?: SortOrder
    empleadoid?: SortOrder
    diastrabajados?: SortOrder
    ausenciasjustificadas?: SortOrder
    ausenciasinjustificadas?: SortOrder
    horasextra50?: SortOrder
    horasextra100?: SortOrder
    tardanzasacumuladas?: SortOrder
  }

  export type cierremensualdetallesMinOrderByAggregateInput = {
    id?: SortOrder
    cierremensualid?: SortOrder
    empleadoid?: SortOrder
    diastrabajados?: SortOrder
    ausenciasjustificadas?: SortOrder
    ausenciasinjustificadas?: SortOrder
    horasextra50?: SortOrder
    horasextra100?: SortOrder
    tardanzasacumuladas?: SortOrder
  }

  export type cierremensualdetallesSumOrderByAggregateInput = {
    id?: SortOrder
    cierremensualid?: SortOrder
    empleadoid?: SortOrder
    diastrabajados?: SortOrder
    ausenciasjustificadas?: SortOrder
    ausenciasinjustificadas?: SortOrder
    horasextra50?: SortOrder
    horasextra100?: SortOrder
    tardanzasacumuladas?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CierremensualdetallesListRelationFilter = {
    every?: cierremensualdetallesWhereInput
    some?: cierremensualdetallesWhereInput
    none?: cierremensualdetallesWhereInput
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cierremensualdetallesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cierresmensualesCountOrderByAggregateInput = {
    id?: SortOrder
    periodo?: SortOrder
    fechacierre?: SortOrder
    usuariocierreid?: SortOrder
    estado?: SortOrder
  }

  export type cierresmensualesAvgOrderByAggregateInput = {
    id?: SortOrder
    usuariocierreid?: SortOrder
  }

  export type cierresmensualesMaxOrderByAggregateInput = {
    id?: SortOrder
    periodo?: SortOrder
    fechacierre?: SortOrder
    usuariocierreid?: SortOrder
    estado?: SortOrder
  }

  export type cierresmensualesMinOrderByAggregateInput = {
    id?: SortOrder
    periodo?: SortOrder
    fechacierre?: SortOrder
    usuariocierreid?: SortOrder
    estado?: SortOrder
  }

  export type cierresmensualesSumOrderByAggregateInput = {
    id?: SortOrder
    usuariocierreid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type HorariosScalarRelationFilter = {
    is?: horariosWhereInput
    isNot?: horariosWhereInput
  }

  export type FichadasListRelationFilter = {
    every?: fichadasWhereInput
    some?: fichadasWhereInput
    none?: fichadasWhereInput
  }

  export type NovedadesListRelationFilter = {
    every?: novedadesWhereInput
    some?: novedadesWhereInput
    none?: novedadesWhereInput
  }

  export type UsuariosListRelationFilter = {
    every?: usuariosWhereInput
    some?: usuariosWhereInput
    none?: usuariosWhereInput
  }

  export type fichadasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type novedadesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type empleadosCountOrderByAggregateInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    fechaingreso?: SortOrder
    categorialaboral?: SortOrder
    convenio?: SortOrder
    tipojornada?: SortOrder
    horarioid?: SortOrder
    diasdescanso?: SortOrder
    modalidadfichada?: SortOrder
    estado?: SortOrder
  }

  export type empleadosAvgOrderByAggregateInput = {
    id?: SortOrder
    horarioid?: SortOrder
  }

  export type empleadosMaxOrderByAggregateInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    fechaingreso?: SortOrder
    categorialaboral?: SortOrder
    convenio?: SortOrder
    tipojornada?: SortOrder
    horarioid?: SortOrder
    diasdescanso?: SortOrder
    modalidadfichada?: SortOrder
    estado?: SortOrder
  }

  export type empleadosMinOrderByAggregateInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    fechaingreso?: SortOrder
    categorialaboral?: SortOrder
    convenio?: SortOrder
    tipojornada?: SortOrder
    horarioid?: SortOrder
    diasdescanso?: SortOrder
    modalidadfichada?: SortOrder
    estado?: SortOrder
  }

  export type empleadosSumOrderByAggregateInput = {
    id?: SortOrder
    horarioid?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FichadasNullableScalarRelationFilter = {
    is?: fichadasWhereInput | null
    isNot?: fichadasWhereInput | null
  }

  export type fichadasCountOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    timestamp?: SortOrder
    tipo?: SortOrder
    origen?: SortOrder
    usuarioregistro?: SortOrder
    motivo?: SortOrder
    escorreccion?: SortOrder
    fichadaoriginalid?: SortOrder
  }

  export type fichadasAvgOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    usuarioregistro?: SortOrder
    fichadaoriginalid?: SortOrder
  }

  export type fichadasMaxOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    timestamp?: SortOrder
    tipo?: SortOrder
    origen?: SortOrder
    usuarioregistro?: SortOrder
    motivo?: SortOrder
    escorreccion?: SortOrder
    fichadaoriginalid?: SortOrder
  }

  export type fichadasMinOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    timestamp?: SortOrder
    tipo?: SortOrder
    origen?: SortOrder
    usuarioregistro?: SortOrder
    motivo?: SortOrder
    escorreccion?: SortOrder
    fichadaoriginalid?: SortOrder
  }

  export type fichadasSumOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    usuarioregistro?: SortOrder
    fichadaoriginalid?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmpleadosListRelationFilter = {
    every?: empleadosWhereInput
    some?: empleadosWhereInput
    none?: empleadosWhereInput
  }

  export type empleadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type horariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    diassemana?: SortOrder
    horaentrada?: SortOrder
    horasalida?: SortOrder
    toleranciaentrada?: SortOrder
    toleranciasalida?: SortOrder
    descansoinicio?: SortOrder
    descansofin?: SortOrder
    minutosmindescanso?: SortOrder
    umbralhorasextra?: SortOrder
  }

  export type horariosAvgOrderByAggregateInput = {
    id?: SortOrder
    toleranciaentrada?: SortOrder
    toleranciasalida?: SortOrder
    minutosmindescanso?: SortOrder
    umbralhorasextra?: SortOrder
  }

  export type horariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    diassemana?: SortOrder
    horaentrada?: SortOrder
    horasalida?: SortOrder
    toleranciaentrada?: SortOrder
    toleranciasalida?: SortOrder
    descansoinicio?: SortOrder
    descansofin?: SortOrder
    minutosmindescanso?: SortOrder
    umbralhorasextra?: SortOrder
  }

  export type horariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    diassemana?: SortOrder
    horaentrada?: SortOrder
    horasalida?: SortOrder
    toleranciaentrada?: SortOrder
    toleranciasalida?: SortOrder
    descansoinicio?: SortOrder
    descansofin?: SortOrder
    minutosmindescanso?: SortOrder
    umbralhorasextra?: SortOrder
  }

  export type horariosSumOrderByAggregateInput = {
    id?: SortOrder
    toleranciaentrada?: SortOrder
    toleranciasalida?: SortOrder
    minutosmindescanso?: SortOrder
    umbralhorasextra?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type novedadesCountOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    tipo?: SortOrder
    fechasafectadas?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    estado?: SortOrder
    origen?: SortOrder
    observacion?: SortOrder
    periodo?: SortOrder
  }

  export type novedadesAvgOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    cantidad?: SortOrder
  }

  export type novedadesMaxOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    tipo?: SortOrder
    fechasafectadas?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    estado?: SortOrder
    origen?: SortOrder
    observacion?: SortOrder
    periodo?: SortOrder
  }

  export type novedadesMinOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    tipo?: SortOrder
    fechasafectadas?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    estado?: SortOrder
    origen?: SortOrder
    observacion?: SortOrder
    periodo?: SortOrder
  }

  export type novedadesSumOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
    cantidad?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CierresmensualesListRelationFilter = {
    every?: cierresmensualesWhereInput
    some?: cierresmensualesWhereInput
    none?: cierresmensualesWhereInput
  }

  export type EmpleadosNullableScalarRelationFilter = {
    is?: empleadosWhereInput | null
    isNot?: empleadosWhereInput | null
  }

  export type cierresmensualesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordhash?: SortOrder
    rol?: SortOrder
    empleadoid?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordhash?: SortOrder
    rol?: SortOrder
    empleadoid?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordhash?: SortOrder
    rol?: SortOrder
    empleadoid?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    empleadoid?: SortOrder
  }

  export type cierresmensualesCreateNestedOneWithoutCierremensualdetallesInput = {
    create?: XOR<cierresmensualesCreateWithoutCierremensualdetallesInput, cierresmensualesUncheckedCreateWithoutCierremensualdetallesInput>
    connectOrCreate?: cierresmensualesCreateOrConnectWithoutCierremensualdetallesInput
    connect?: cierresmensualesWhereUniqueInput
  }

  export type empleadosCreateNestedOneWithoutCierremensualdetallesInput = {
    create?: XOR<empleadosCreateWithoutCierremensualdetallesInput, empleadosUncheckedCreateWithoutCierremensualdetallesInput>
    connectOrCreate?: empleadosCreateOrConnectWithoutCierremensualdetallesInput
    connect?: empleadosWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cierresmensualesUpdateOneRequiredWithoutCierremensualdetallesNestedInput = {
    create?: XOR<cierresmensualesCreateWithoutCierremensualdetallesInput, cierresmensualesUncheckedCreateWithoutCierremensualdetallesInput>
    connectOrCreate?: cierresmensualesCreateOrConnectWithoutCierremensualdetallesInput
    upsert?: cierresmensualesUpsertWithoutCierremensualdetallesInput
    connect?: cierresmensualesWhereUniqueInput
    update?: XOR<XOR<cierresmensualesUpdateToOneWithWhereWithoutCierremensualdetallesInput, cierresmensualesUpdateWithoutCierremensualdetallesInput>, cierresmensualesUncheckedUpdateWithoutCierremensualdetallesInput>
  }

  export type empleadosUpdateOneRequiredWithoutCierremensualdetallesNestedInput = {
    create?: XOR<empleadosCreateWithoutCierremensualdetallesInput, empleadosUncheckedCreateWithoutCierremensualdetallesInput>
    connectOrCreate?: empleadosCreateOrConnectWithoutCierremensualdetallesInput
    upsert?: empleadosUpsertWithoutCierremensualdetallesInput
    connect?: empleadosWhereUniqueInput
    update?: XOR<XOR<empleadosUpdateToOneWithWhereWithoutCierremensualdetallesInput, empleadosUpdateWithoutCierremensualdetallesInput>, empleadosUncheckedUpdateWithoutCierremensualdetallesInput>
  }

  export type cierremensualdetallesCreateNestedManyWithoutCierresmensualesInput = {
    create?: XOR<cierremensualdetallesCreateWithoutCierresmensualesInput, cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput> | cierremensualdetallesCreateWithoutCierresmensualesInput[] | cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput[]
    connectOrCreate?: cierremensualdetallesCreateOrConnectWithoutCierresmensualesInput | cierremensualdetallesCreateOrConnectWithoutCierresmensualesInput[]
    createMany?: cierremensualdetallesCreateManyCierresmensualesInputEnvelope
    connect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
  }

  export type usuariosCreateNestedOneWithoutCierresmensualesInput = {
    create?: XOR<usuariosCreateWithoutCierresmensualesInput, usuariosUncheckedCreateWithoutCierresmensualesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCierresmensualesInput
    connect?: usuariosWhereUniqueInput
  }

  export type cierremensualdetallesUncheckedCreateNestedManyWithoutCierresmensualesInput = {
    create?: XOR<cierremensualdetallesCreateWithoutCierresmensualesInput, cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput> | cierremensualdetallesCreateWithoutCierresmensualesInput[] | cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput[]
    connectOrCreate?: cierremensualdetallesCreateOrConnectWithoutCierresmensualesInput | cierremensualdetallesCreateOrConnectWithoutCierresmensualesInput[]
    createMany?: cierremensualdetallesCreateManyCierresmensualesInputEnvelope
    connect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type cierremensualdetallesUpdateManyWithoutCierresmensualesNestedInput = {
    create?: XOR<cierremensualdetallesCreateWithoutCierresmensualesInput, cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput> | cierremensualdetallesCreateWithoutCierresmensualesInput[] | cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput[]
    connectOrCreate?: cierremensualdetallesCreateOrConnectWithoutCierresmensualesInput | cierremensualdetallesCreateOrConnectWithoutCierresmensualesInput[]
    upsert?: cierremensualdetallesUpsertWithWhereUniqueWithoutCierresmensualesInput | cierremensualdetallesUpsertWithWhereUniqueWithoutCierresmensualesInput[]
    createMany?: cierremensualdetallesCreateManyCierresmensualesInputEnvelope
    set?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    disconnect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    delete?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    connect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    update?: cierremensualdetallesUpdateWithWhereUniqueWithoutCierresmensualesInput | cierremensualdetallesUpdateWithWhereUniqueWithoutCierresmensualesInput[]
    updateMany?: cierremensualdetallesUpdateManyWithWhereWithoutCierresmensualesInput | cierremensualdetallesUpdateManyWithWhereWithoutCierresmensualesInput[]
    deleteMany?: cierremensualdetallesScalarWhereInput | cierremensualdetallesScalarWhereInput[]
  }

  export type usuariosUpdateOneWithoutCierresmensualesNestedInput = {
    create?: XOR<usuariosCreateWithoutCierresmensualesInput, usuariosUncheckedCreateWithoutCierresmensualesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCierresmensualesInput
    upsert?: usuariosUpsertWithoutCierresmensualesInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutCierresmensualesInput, usuariosUpdateWithoutCierresmensualesInput>, usuariosUncheckedUpdateWithoutCierresmensualesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cierremensualdetallesUncheckedUpdateManyWithoutCierresmensualesNestedInput = {
    create?: XOR<cierremensualdetallesCreateWithoutCierresmensualesInput, cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput> | cierremensualdetallesCreateWithoutCierresmensualesInput[] | cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput[]
    connectOrCreate?: cierremensualdetallesCreateOrConnectWithoutCierresmensualesInput | cierremensualdetallesCreateOrConnectWithoutCierresmensualesInput[]
    upsert?: cierremensualdetallesUpsertWithWhereUniqueWithoutCierresmensualesInput | cierremensualdetallesUpsertWithWhereUniqueWithoutCierresmensualesInput[]
    createMany?: cierremensualdetallesCreateManyCierresmensualesInputEnvelope
    set?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    disconnect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    delete?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    connect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    update?: cierremensualdetallesUpdateWithWhereUniqueWithoutCierresmensualesInput | cierremensualdetallesUpdateWithWhereUniqueWithoutCierresmensualesInput[]
    updateMany?: cierremensualdetallesUpdateManyWithWhereWithoutCierresmensualesInput | cierremensualdetallesUpdateManyWithWhereWithoutCierresmensualesInput[]
    deleteMany?: cierremensualdetallesScalarWhereInput | cierremensualdetallesScalarWhereInput[]
  }

  export type cierremensualdetallesCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<cierremensualdetallesCreateWithoutEmpleadosInput, cierremensualdetallesUncheckedCreateWithoutEmpleadosInput> | cierremensualdetallesCreateWithoutEmpleadosInput[] | cierremensualdetallesUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: cierremensualdetallesCreateOrConnectWithoutEmpleadosInput | cierremensualdetallesCreateOrConnectWithoutEmpleadosInput[]
    createMany?: cierremensualdetallesCreateManyEmpleadosInputEnvelope
    connect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
  }

  export type horariosCreateNestedOneWithoutEmpleadosInput = {
    create?: XOR<horariosCreateWithoutEmpleadosInput, horariosUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: horariosCreateOrConnectWithoutEmpleadosInput
    connect?: horariosWhereUniqueInput
  }

  export type fichadasCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<fichadasCreateWithoutEmpleadosInput, fichadasUncheckedCreateWithoutEmpleadosInput> | fichadasCreateWithoutEmpleadosInput[] | fichadasUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutEmpleadosInput | fichadasCreateOrConnectWithoutEmpleadosInput[]
    createMany?: fichadasCreateManyEmpleadosInputEnvelope
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
  }

  export type novedadesCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<novedadesCreateWithoutEmpleadosInput, novedadesUncheckedCreateWithoutEmpleadosInput> | novedadesCreateWithoutEmpleadosInput[] | novedadesUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: novedadesCreateOrConnectWithoutEmpleadosInput | novedadesCreateOrConnectWithoutEmpleadosInput[]
    createMany?: novedadesCreateManyEmpleadosInputEnvelope
    connect?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
  }

  export type usuariosCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<usuariosCreateWithoutEmpleadosInput, usuariosUncheckedCreateWithoutEmpleadosInput> | usuariosCreateWithoutEmpleadosInput[] | usuariosUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutEmpleadosInput | usuariosCreateOrConnectWithoutEmpleadosInput[]
    createMany?: usuariosCreateManyEmpleadosInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type cierremensualdetallesUncheckedCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<cierremensualdetallesCreateWithoutEmpleadosInput, cierremensualdetallesUncheckedCreateWithoutEmpleadosInput> | cierremensualdetallesCreateWithoutEmpleadosInput[] | cierremensualdetallesUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: cierremensualdetallesCreateOrConnectWithoutEmpleadosInput | cierremensualdetallesCreateOrConnectWithoutEmpleadosInput[]
    createMany?: cierremensualdetallesCreateManyEmpleadosInputEnvelope
    connect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
  }

  export type fichadasUncheckedCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<fichadasCreateWithoutEmpleadosInput, fichadasUncheckedCreateWithoutEmpleadosInput> | fichadasCreateWithoutEmpleadosInput[] | fichadasUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutEmpleadosInput | fichadasCreateOrConnectWithoutEmpleadosInput[]
    createMany?: fichadasCreateManyEmpleadosInputEnvelope
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
  }

  export type novedadesUncheckedCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<novedadesCreateWithoutEmpleadosInput, novedadesUncheckedCreateWithoutEmpleadosInput> | novedadesCreateWithoutEmpleadosInput[] | novedadesUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: novedadesCreateOrConnectWithoutEmpleadosInput | novedadesCreateOrConnectWithoutEmpleadosInput[]
    createMany?: novedadesCreateManyEmpleadosInputEnvelope
    connect?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
  }

  export type usuariosUncheckedCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<usuariosCreateWithoutEmpleadosInput, usuariosUncheckedCreateWithoutEmpleadosInput> | usuariosCreateWithoutEmpleadosInput[] | usuariosUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutEmpleadosInput | usuariosCreateOrConnectWithoutEmpleadosInput[]
    createMany?: usuariosCreateManyEmpleadosInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type cierremensualdetallesUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<cierremensualdetallesCreateWithoutEmpleadosInput, cierremensualdetallesUncheckedCreateWithoutEmpleadosInput> | cierremensualdetallesCreateWithoutEmpleadosInput[] | cierremensualdetallesUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: cierremensualdetallesCreateOrConnectWithoutEmpleadosInput | cierremensualdetallesCreateOrConnectWithoutEmpleadosInput[]
    upsert?: cierremensualdetallesUpsertWithWhereUniqueWithoutEmpleadosInput | cierremensualdetallesUpsertWithWhereUniqueWithoutEmpleadosInput[]
    createMany?: cierremensualdetallesCreateManyEmpleadosInputEnvelope
    set?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    disconnect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    delete?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    connect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    update?: cierremensualdetallesUpdateWithWhereUniqueWithoutEmpleadosInput | cierremensualdetallesUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: cierremensualdetallesUpdateManyWithWhereWithoutEmpleadosInput | cierremensualdetallesUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: cierremensualdetallesScalarWhereInput | cierremensualdetallesScalarWhereInput[]
  }

  export type horariosUpdateOneRequiredWithoutEmpleadosNestedInput = {
    create?: XOR<horariosCreateWithoutEmpleadosInput, horariosUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: horariosCreateOrConnectWithoutEmpleadosInput
    upsert?: horariosUpsertWithoutEmpleadosInput
    connect?: horariosWhereUniqueInput
    update?: XOR<XOR<horariosUpdateToOneWithWhereWithoutEmpleadosInput, horariosUpdateWithoutEmpleadosInput>, horariosUncheckedUpdateWithoutEmpleadosInput>
  }

  export type fichadasUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<fichadasCreateWithoutEmpleadosInput, fichadasUncheckedCreateWithoutEmpleadosInput> | fichadasCreateWithoutEmpleadosInput[] | fichadasUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutEmpleadosInput | fichadasCreateOrConnectWithoutEmpleadosInput[]
    upsert?: fichadasUpsertWithWhereUniqueWithoutEmpleadosInput | fichadasUpsertWithWhereUniqueWithoutEmpleadosInput[]
    createMany?: fichadasCreateManyEmpleadosInputEnvelope
    set?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    disconnect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    delete?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    update?: fichadasUpdateWithWhereUniqueWithoutEmpleadosInput | fichadasUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: fichadasUpdateManyWithWhereWithoutEmpleadosInput | fichadasUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: fichadasScalarWhereInput | fichadasScalarWhereInput[]
  }

  export type novedadesUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<novedadesCreateWithoutEmpleadosInput, novedadesUncheckedCreateWithoutEmpleadosInput> | novedadesCreateWithoutEmpleadosInput[] | novedadesUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: novedadesCreateOrConnectWithoutEmpleadosInput | novedadesCreateOrConnectWithoutEmpleadosInput[]
    upsert?: novedadesUpsertWithWhereUniqueWithoutEmpleadosInput | novedadesUpsertWithWhereUniqueWithoutEmpleadosInput[]
    createMany?: novedadesCreateManyEmpleadosInputEnvelope
    set?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
    disconnect?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
    delete?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
    connect?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
    update?: novedadesUpdateWithWhereUniqueWithoutEmpleadosInput | novedadesUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: novedadesUpdateManyWithWhereWithoutEmpleadosInput | novedadesUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: novedadesScalarWhereInput | novedadesScalarWhereInput[]
  }

  export type usuariosUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<usuariosCreateWithoutEmpleadosInput, usuariosUncheckedCreateWithoutEmpleadosInput> | usuariosCreateWithoutEmpleadosInput[] | usuariosUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutEmpleadosInput | usuariosCreateOrConnectWithoutEmpleadosInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutEmpleadosInput | usuariosUpsertWithWhereUniqueWithoutEmpleadosInput[]
    createMany?: usuariosCreateManyEmpleadosInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutEmpleadosInput | usuariosUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutEmpleadosInput | usuariosUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type cierremensualdetallesUncheckedUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<cierremensualdetallesCreateWithoutEmpleadosInput, cierremensualdetallesUncheckedCreateWithoutEmpleadosInput> | cierremensualdetallesCreateWithoutEmpleadosInput[] | cierremensualdetallesUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: cierremensualdetallesCreateOrConnectWithoutEmpleadosInput | cierremensualdetallesCreateOrConnectWithoutEmpleadosInput[]
    upsert?: cierremensualdetallesUpsertWithWhereUniqueWithoutEmpleadosInput | cierremensualdetallesUpsertWithWhereUniqueWithoutEmpleadosInput[]
    createMany?: cierremensualdetallesCreateManyEmpleadosInputEnvelope
    set?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    disconnect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    delete?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    connect?: cierremensualdetallesWhereUniqueInput | cierremensualdetallesWhereUniqueInput[]
    update?: cierremensualdetallesUpdateWithWhereUniqueWithoutEmpleadosInput | cierremensualdetallesUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: cierremensualdetallesUpdateManyWithWhereWithoutEmpleadosInput | cierremensualdetallesUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: cierremensualdetallesScalarWhereInput | cierremensualdetallesScalarWhereInput[]
  }

  export type fichadasUncheckedUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<fichadasCreateWithoutEmpleadosInput, fichadasUncheckedCreateWithoutEmpleadosInput> | fichadasCreateWithoutEmpleadosInput[] | fichadasUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutEmpleadosInput | fichadasCreateOrConnectWithoutEmpleadosInput[]
    upsert?: fichadasUpsertWithWhereUniqueWithoutEmpleadosInput | fichadasUpsertWithWhereUniqueWithoutEmpleadosInput[]
    createMany?: fichadasCreateManyEmpleadosInputEnvelope
    set?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    disconnect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    delete?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    update?: fichadasUpdateWithWhereUniqueWithoutEmpleadosInput | fichadasUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: fichadasUpdateManyWithWhereWithoutEmpleadosInput | fichadasUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: fichadasScalarWhereInput | fichadasScalarWhereInput[]
  }

  export type novedadesUncheckedUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<novedadesCreateWithoutEmpleadosInput, novedadesUncheckedCreateWithoutEmpleadosInput> | novedadesCreateWithoutEmpleadosInput[] | novedadesUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: novedadesCreateOrConnectWithoutEmpleadosInput | novedadesCreateOrConnectWithoutEmpleadosInput[]
    upsert?: novedadesUpsertWithWhereUniqueWithoutEmpleadosInput | novedadesUpsertWithWhereUniqueWithoutEmpleadosInput[]
    createMany?: novedadesCreateManyEmpleadosInputEnvelope
    set?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
    disconnect?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
    delete?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
    connect?: novedadesWhereUniqueInput | novedadesWhereUniqueInput[]
    update?: novedadesUpdateWithWhereUniqueWithoutEmpleadosInput | novedadesUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: novedadesUpdateManyWithWhereWithoutEmpleadosInput | novedadesUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: novedadesScalarWhereInput | novedadesScalarWhereInput[]
  }

  export type usuariosUncheckedUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<usuariosCreateWithoutEmpleadosInput, usuariosUncheckedCreateWithoutEmpleadosInput> | usuariosCreateWithoutEmpleadosInput[] | usuariosUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutEmpleadosInput | usuariosCreateOrConnectWithoutEmpleadosInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutEmpleadosInput | usuariosUpsertWithWhereUniqueWithoutEmpleadosInput[]
    createMany?: usuariosCreateManyEmpleadosInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutEmpleadosInput | usuariosUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutEmpleadosInput | usuariosUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type empleadosCreateNestedOneWithoutFichadasInput = {
    create?: XOR<empleadosCreateWithoutFichadasInput, empleadosUncheckedCreateWithoutFichadasInput>
    connectOrCreate?: empleadosCreateOrConnectWithoutFichadasInput
    connect?: empleadosWhereUniqueInput
  }

  export type fichadasCreateNestedOneWithoutOther_fichadasInput = {
    create?: XOR<fichadasCreateWithoutOther_fichadasInput, fichadasUncheckedCreateWithoutOther_fichadasInput>
    connectOrCreate?: fichadasCreateOrConnectWithoutOther_fichadasInput
    connect?: fichadasWhereUniqueInput
  }

  export type fichadasCreateNestedManyWithoutFichadasInput = {
    create?: XOR<fichadasCreateWithoutFichadasInput, fichadasUncheckedCreateWithoutFichadasInput> | fichadasCreateWithoutFichadasInput[] | fichadasUncheckedCreateWithoutFichadasInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutFichadasInput | fichadasCreateOrConnectWithoutFichadasInput[]
    createMany?: fichadasCreateManyFichadasInputEnvelope
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
  }

  export type usuariosCreateNestedOneWithoutFichadasInput = {
    create?: XOR<usuariosCreateWithoutFichadasInput, usuariosUncheckedCreateWithoutFichadasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutFichadasInput
    connect?: usuariosWhereUniqueInput
  }

  export type fichadasUncheckedCreateNestedManyWithoutFichadasInput = {
    create?: XOR<fichadasCreateWithoutFichadasInput, fichadasUncheckedCreateWithoutFichadasInput> | fichadasCreateWithoutFichadasInput[] | fichadasUncheckedCreateWithoutFichadasInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutFichadasInput | fichadasCreateOrConnectWithoutFichadasInput[]
    createMany?: fichadasCreateManyFichadasInputEnvelope
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type empleadosUpdateOneRequiredWithoutFichadasNestedInput = {
    create?: XOR<empleadosCreateWithoutFichadasInput, empleadosUncheckedCreateWithoutFichadasInput>
    connectOrCreate?: empleadosCreateOrConnectWithoutFichadasInput
    upsert?: empleadosUpsertWithoutFichadasInput
    connect?: empleadosWhereUniqueInput
    update?: XOR<XOR<empleadosUpdateToOneWithWhereWithoutFichadasInput, empleadosUpdateWithoutFichadasInput>, empleadosUncheckedUpdateWithoutFichadasInput>
  }

  export type fichadasUpdateOneWithoutOther_fichadasNestedInput = {
    create?: XOR<fichadasCreateWithoutOther_fichadasInput, fichadasUncheckedCreateWithoutOther_fichadasInput>
    connectOrCreate?: fichadasCreateOrConnectWithoutOther_fichadasInput
    upsert?: fichadasUpsertWithoutOther_fichadasInput
    disconnect?: fichadasWhereInput | boolean
    delete?: fichadasWhereInput | boolean
    connect?: fichadasWhereUniqueInput
    update?: XOR<XOR<fichadasUpdateToOneWithWhereWithoutOther_fichadasInput, fichadasUpdateWithoutOther_fichadasInput>, fichadasUncheckedUpdateWithoutOther_fichadasInput>
  }

  export type fichadasUpdateManyWithoutFichadasNestedInput = {
    create?: XOR<fichadasCreateWithoutFichadasInput, fichadasUncheckedCreateWithoutFichadasInput> | fichadasCreateWithoutFichadasInput[] | fichadasUncheckedCreateWithoutFichadasInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutFichadasInput | fichadasCreateOrConnectWithoutFichadasInput[]
    upsert?: fichadasUpsertWithWhereUniqueWithoutFichadasInput | fichadasUpsertWithWhereUniqueWithoutFichadasInput[]
    createMany?: fichadasCreateManyFichadasInputEnvelope
    set?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    disconnect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    delete?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    update?: fichadasUpdateWithWhereUniqueWithoutFichadasInput | fichadasUpdateWithWhereUniqueWithoutFichadasInput[]
    updateMany?: fichadasUpdateManyWithWhereWithoutFichadasInput | fichadasUpdateManyWithWhereWithoutFichadasInput[]
    deleteMany?: fichadasScalarWhereInput | fichadasScalarWhereInput[]
  }

  export type usuariosUpdateOneWithoutFichadasNestedInput = {
    create?: XOR<usuariosCreateWithoutFichadasInput, usuariosUncheckedCreateWithoutFichadasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutFichadasInput
    upsert?: usuariosUpsertWithoutFichadasInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutFichadasInput, usuariosUpdateWithoutFichadasInput>, usuariosUncheckedUpdateWithoutFichadasInput>
  }

  export type fichadasUncheckedUpdateManyWithoutFichadasNestedInput = {
    create?: XOR<fichadasCreateWithoutFichadasInput, fichadasUncheckedCreateWithoutFichadasInput> | fichadasCreateWithoutFichadasInput[] | fichadasUncheckedCreateWithoutFichadasInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutFichadasInput | fichadasCreateOrConnectWithoutFichadasInput[]
    upsert?: fichadasUpsertWithWhereUniqueWithoutFichadasInput | fichadasUpsertWithWhereUniqueWithoutFichadasInput[]
    createMany?: fichadasCreateManyFichadasInputEnvelope
    set?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    disconnect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    delete?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    update?: fichadasUpdateWithWhereUniqueWithoutFichadasInput | fichadasUpdateWithWhereUniqueWithoutFichadasInput[]
    updateMany?: fichadasUpdateManyWithWhereWithoutFichadasInput | fichadasUpdateManyWithWhereWithoutFichadasInput[]
    deleteMany?: fichadasScalarWhereInput | fichadasScalarWhereInput[]
  }

  export type empleadosCreateNestedManyWithoutHorariosInput = {
    create?: XOR<empleadosCreateWithoutHorariosInput, empleadosUncheckedCreateWithoutHorariosInput> | empleadosCreateWithoutHorariosInput[] | empleadosUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: empleadosCreateOrConnectWithoutHorariosInput | empleadosCreateOrConnectWithoutHorariosInput[]
    createMany?: empleadosCreateManyHorariosInputEnvelope
    connect?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
  }

  export type empleadosUncheckedCreateNestedManyWithoutHorariosInput = {
    create?: XOR<empleadosCreateWithoutHorariosInput, empleadosUncheckedCreateWithoutHorariosInput> | empleadosCreateWithoutHorariosInput[] | empleadosUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: empleadosCreateOrConnectWithoutHorariosInput | empleadosCreateOrConnectWithoutHorariosInput[]
    createMany?: empleadosCreateManyHorariosInputEnvelope
    connect?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
  }

  export type empleadosUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<empleadosCreateWithoutHorariosInput, empleadosUncheckedCreateWithoutHorariosInput> | empleadosCreateWithoutHorariosInput[] | empleadosUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: empleadosCreateOrConnectWithoutHorariosInput | empleadosCreateOrConnectWithoutHorariosInput[]
    upsert?: empleadosUpsertWithWhereUniqueWithoutHorariosInput | empleadosUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: empleadosCreateManyHorariosInputEnvelope
    set?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
    disconnect?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
    delete?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
    connect?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
    update?: empleadosUpdateWithWhereUniqueWithoutHorariosInput | empleadosUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: empleadosUpdateManyWithWhereWithoutHorariosInput | empleadosUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: empleadosScalarWhereInput | empleadosScalarWhereInput[]
  }

  export type empleadosUncheckedUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<empleadosCreateWithoutHorariosInput, empleadosUncheckedCreateWithoutHorariosInput> | empleadosCreateWithoutHorariosInput[] | empleadosUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: empleadosCreateOrConnectWithoutHorariosInput | empleadosCreateOrConnectWithoutHorariosInput[]
    upsert?: empleadosUpsertWithWhereUniqueWithoutHorariosInput | empleadosUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: empleadosCreateManyHorariosInputEnvelope
    set?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
    disconnect?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
    delete?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
    connect?: empleadosWhereUniqueInput | empleadosWhereUniqueInput[]
    update?: empleadosUpdateWithWhereUniqueWithoutHorariosInput | empleadosUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: empleadosUpdateManyWithWhereWithoutHorariosInput | empleadosUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: empleadosScalarWhereInput | empleadosScalarWhereInput[]
  }

  export type empleadosCreateNestedOneWithoutNovedadesInput = {
    create?: XOR<empleadosCreateWithoutNovedadesInput, empleadosUncheckedCreateWithoutNovedadesInput>
    connectOrCreate?: empleadosCreateOrConnectWithoutNovedadesInput
    connect?: empleadosWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type empleadosUpdateOneRequiredWithoutNovedadesNestedInput = {
    create?: XOR<empleadosCreateWithoutNovedadesInput, empleadosUncheckedCreateWithoutNovedadesInput>
    connectOrCreate?: empleadosCreateOrConnectWithoutNovedadesInput
    upsert?: empleadosUpsertWithoutNovedadesInput
    connect?: empleadosWhereUniqueInput
    update?: XOR<XOR<empleadosUpdateToOneWithWhereWithoutNovedadesInput, empleadosUpdateWithoutNovedadesInput>, empleadosUncheckedUpdateWithoutNovedadesInput>
  }

  export type cierresmensualesCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<cierresmensualesCreateWithoutUsuariosInput, cierresmensualesUncheckedCreateWithoutUsuariosInput> | cierresmensualesCreateWithoutUsuariosInput[] | cierresmensualesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: cierresmensualesCreateOrConnectWithoutUsuariosInput | cierresmensualesCreateOrConnectWithoutUsuariosInput[]
    createMany?: cierresmensualesCreateManyUsuariosInputEnvelope
    connect?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
  }

  export type fichadasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<fichadasCreateWithoutUsuariosInput, fichadasUncheckedCreateWithoutUsuariosInput> | fichadasCreateWithoutUsuariosInput[] | fichadasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutUsuariosInput | fichadasCreateOrConnectWithoutUsuariosInput[]
    createMany?: fichadasCreateManyUsuariosInputEnvelope
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
  }

  export type empleadosCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<empleadosCreateWithoutUsuariosInput, empleadosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: empleadosCreateOrConnectWithoutUsuariosInput
    connect?: empleadosWhereUniqueInput
  }

  export type cierresmensualesUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<cierresmensualesCreateWithoutUsuariosInput, cierresmensualesUncheckedCreateWithoutUsuariosInput> | cierresmensualesCreateWithoutUsuariosInput[] | cierresmensualesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: cierresmensualesCreateOrConnectWithoutUsuariosInput | cierresmensualesCreateOrConnectWithoutUsuariosInput[]
    createMany?: cierresmensualesCreateManyUsuariosInputEnvelope
    connect?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
  }

  export type fichadasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<fichadasCreateWithoutUsuariosInput, fichadasUncheckedCreateWithoutUsuariosInput> | fichadasCreateWithoutUsuariosInput[] | fichadasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutUsuariosInput | fichadasCreateOrConnectWithoutUsuariosInput[]
    createMany?: fichadasCreateManyUsuariosInputEnvelope
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
  }

  export type cierresmensualesUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<cierresmensualesCreateWithoutUsuariosInput, cierresmensualesUncheckedCreateWithoutUsuariosInput> | cierresmensualesCreateWithoutUsuariosInput[] | cierresmensualesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: cierresmensualesCreateOrConnectWithoutUsuariosInput | cierresmensualesCreateOrConnectWithoutUsuariosInput[]
    upsert?: cierresmensualesUpsertWithWhereUniqueWithoutUsuariosInput | cierresmensualesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: cierresmensualesCreateManyUsuariosInputEnvelope
    set?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
    disconnect?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
    delete?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
    connect?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
    update?: cierresmensualesUpdateWithWhereUniqueWithoutUsuariosInput | cierresmensualesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: cierresmensualesUpdateManyWithWhereWithoutUsuariosInput | cierresmensualesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: cierresmensualesScalarWhereInput | cierresmensualesScalarWhereInput[]
  }

  export type fichadasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<fichadasCreateWithoutUsuariosInput, fichadasUncheckedCreateWithoutUsuariosInput> | fichadasCreateWithoutUsuariosInput[] | fichadasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutUsuariosInput | fichadasCreateOrConnectWithoutUsuariosInput[]
    upsert?: fichadasUpsertWithWhereUniqueWithoutUsuariosInput | fichadasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: fichadasCreateManyUsuariosInputEnvelope
    set?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    disconnect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    delete?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    update?: fichadasUpdateWithWhereUniqueWithoutUsuariosInput | fichadasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: fichadasUpdateManyWithWhereWithoutUsuariosInput | fichadasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: fichadasScalarWhereInput | fichadasScalarWhereInput[]
  }

  export type empleadosUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<empleadosCreateWithoutUsuariosInput, empleadosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: empleadosCreateOrConnectWithoutUsuariosInput
    upsert?: empleadosUpsertWithoutUsuariosInput
    disconnect?: empleadosWhereInput | boolean
    delete?: empleadosWhereInput | boolean
    connect?: empleadosWhereUniqueInput
    update?: XOR<XOR<empleadosUpdateToOneWithWhereWithoutUsuariosInput, empleadosUpdateWithoutUsuariosInput>, empleadosUncheckedUpdateWithoutUsuariosInput>
  }

  export type cierresmensualesUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<cierresmensualesCreateWithoutUsuariosInput, cierresmensualesUncheckedCreateWithoutUsuariosInput> | cierresmensualesCreateWithoutUsuariosInput[] | cierresmensualesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: cierresmensualesCreateOrConnectWithoutUsuariosInput | cierresmensualesCreateOrConnectWithoutUsuariosInput[]
    upsert?: cierresmensualesUpsertWithWhereUniqueWithoutUsuariosInput | cierresmensualesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: cierresmensualesCreateManyUsuariosInputEnvelope
    set?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
    disconnect?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
    delete?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
    connect?: cierresmensualesWhereUniqueInput | cierresmensualesWhereUniqueInput[]
    update?: cierresmensualesUpdateWithWhereUniqueWithoutUsuariosInput | cierresmensualesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: cierresmensualesUpdateManyWithWhereWithoutUsuariosInput | cierresmensualesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: cierresmensualesScalarWhereInput | cierresmensualesScalarWhereInput[]
  }

  export type fichadasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<fichadasCreateWithoutUsuariosInput, fichadasUncheckedCreateWithoutUsuariosInput> | fichadasCreateWithoutUsuariosInput[] | fichadasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: fichadasCreateOrConnectWithoutUsuariosInput | fichadasCreateOrConnectWithoutUsuariosInput[]
    upsert?: fichadasUpsertWithWhereUniqueWithoutUsuariosInput | fichadasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: fichadasCreateManyUsuariosInputEnvelope
    set?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    disconnect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    delete?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    connect?: fichadasWhereUniqueInput | fichadasWhereUniqueInput[]
    update?: fichadasUpdateWithWhereUniqueWithoutUsuariosInput | fichadasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: fichadasUpdateManyWithWhereWithoutUsuariosInput | fichadasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: fichadasScalarWhereInput | fichadasScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type cierresmensualesCreateWithoutCierremensualdetallesInput = {
    periodo: string
    fechacierre?: Date | string | null
    estado: string
    usuarios?: usuariosCreateNestedOneWithoutCierresmensualesInput
  }

  export type cierresmensualesUncheckedCreateWithoutCierremensualdetallesInput = {
    id?: number
    periodo: string
    fechacierre?: Date | string | null
    usuariocierreid?: number | null
    estado: string
  }

  export type cierresmensualesCreateOrConnectWithoutCierremensualdetallesInput = {
    where: cierresmensualesWhereUniqueInput
    create: XOR<cierresmensualesCreateWithoutCierremensualdetallesInput, cierresmensualesUncheckedCreateWithoutCierremensualdetallesInput>
  }

  export type empleadosCreateWithoutCierremensualdetallesInput = {
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    diasdescanso: string
    modalidadfichada: string
    estado: string
    horarios: horariosCreateNestedOneWithoutEmpleadosInput
    fichadas?: fichadasCreateNestedManyWithoutEmpleadosInput
    novedades?: novedadesCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosUncheckedCreateWithoutCierremensualdetallesInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    horarioid: number
    diasdescanso: string
    modalidadfichada: string
    estado: string
    fichadas?: fichadasUncheckedCreateNestedManyWithoutEmpleadosInput
    novedades?: novedadesUncheckedCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosUncheckedCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosCreateOrConnectWithoutCierremensualdetallesInput = {
    where: empleadosWhereUniqueInput
    create: XOR<empleadosCreateWithoutCierremensualdetallesInput, empleadosUncheckedCreateWithoutCierremensualdetallesInput>
  }

  export type cierresmensualesUpsertWithoutCierremensualdetallesInput = {
    update: XOR<cierresmensualesUpdateWithoutCierremensualdetallesInput, cierresmensualesUncheckedUpdateWithoutCierremensualdetallesInput>
    create: XOR<cierresmensualesCreateWithoutCierremensualdetallesInput, cierresmensualesUncheckedCreateWithoutCierremensualdetallesInput>
    where?: cierresmensualesWhereInput
  }

  export type cierresmensualesUpdateToOneWithWhereWithoutCierremensualdetallesInput = {
    where?: cierresmensualesWhereInput
    data: XOR<cierresmensualesUpdateWithoutCierremensualdetallesInput, cierresmensualesUncheckedUpdateWithoutCierremensualdetallesInput>
  }

  export type cierresmensualesUpdateWithoutCierremensualdetallesInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    fechacierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUpdateOneWithoutCierresmensualesNestedInput
  }

  export type cierresmensualesUncheckedUpdateWithoutCierremensualdetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: StringFieldUpdateOperationsInput | string
    fechacierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuariocierreid?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type empleadosUpsertWithoutCierremensualdetallesInput = {
    update: XOR<empleadosUpdateWithoutCierremensualdetallesInput, empleadosUncheckedUpdateWithoutCierremensualdetallesInput>
    create: XOR<empleadosCreateWithoutCierremensualdetallesInput, empleadosUncheckedCreateWithoutCierremensualdetallesInput>
    where?: empleadosWhereInput
  }

  export type empleadosUpdateToOneWithWhereWithoutCierremensualdetallesInput = {
    where?: empleadosWhereInput
    data: XOR<empleadosUpdateWithoutCierremensualdetallesInput, empleadosUncheckedUpdateWithoutCierremensualdetallesInput>
  }

  export type empleadosUpdateWithoutCierremensualdetallesInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    horarios?: horariosUpdateOneRequiredWithoutEmpleadosNestedInput
    fichadas?: fichadasUpdateManyWithoutEmpleadosNestedInput
    novedades?: novedadesUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUpdateManyWithoutEmpleadosNestedInput
  }

  export type empleadosUncheckedUpdateWithoutCierremensualdetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    horarioid?: IntFieldUpdateOperationsInput | number
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fichadas?: fichadasUncheckedUpdateManyWithoutEmpleadosNestedInput
    novedades?: novedadesUncheckedUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUncheckedUpdateManyWithoutEmpleadosNestedInput
  }

  export type cierremensualdetallesCreateWithoutCierresmensualesInput = {
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
    empleados: empleadosCreateNestedOneWithoutCierremensualdetallesInput
  }

  export type cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput = {
    id?: number
    empleadoid: number
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
  }

  export type cierremensualdetallesCreateOrConnectWithoutCierresmensualesInput = {
    where: cierremensualdetallesWhereUniqueInput
    create: XOR<cierremensualdetallesCreateWithoutCierresmensualesInput, cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput>
  }

  export type cierremensualdetallesCreateManyCierresmensualesInputEnvelope = {
    data: cierremensualdetallesCreateManyCierresmensualesInput | cierremensualdetallesCreateManyCierresmensualesInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutCierresmensualesInput = {
    nombre: string
    email: string
    passwordhash: string
    rol: string
    fichadas?: fichadasCreateNestedManyWithoutUsuariosInput
    empleados?: empleadosCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutCierresmensualesInput = {
    id?: number
    nombre: string
    email: string
    passwordhash: string
    rol: string
    empleadoid?: number | null
    fichadas?: fichadasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutCierresmensualesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutCierresmensualesInput, usuariosUncheckedCreateWithoutCierresmensualesInput>
  }

  export type cierremensualdetallesUpsertWithWhereUniqueWithoutCierresmensualesInput = {
    where: cierremensualdetallesWhereUniqueInput
    update: XOR<cierremensualdetallesUpdateWithoutCierresmensualesInput, cierremensualdetallesUncheckedUpdateWithoutCierresmensualesInput>
    create: XOR<cierremensualdetallesCreateWithoutCierresmensualesInput, cierremensualdetallesUncheckedCreateWithoutCierresmensualesInput>
  }

  export type cierremensualdetallesUpdateWithWhereUniqueWithoutCierresmensualesInput = {
    where: cierremensualdetallesWhereUniqueInput
    data: XOR<cierremensualdetallesUpdateWithoutCierresmensualesInput, cierremensualdetallesUncheckedUpdateWithoutCierresmensualesInput>
  }

  export type cierremensualdetallesUpdateManyWithWhereWithoutCierresmensualesInput = {
    where: cierremensualdetallesScalarWhereInput
    data: XOR<cierremensualdetallesUpdateManyMutationInput, cierremensualdetallesUncheckedUpdateManyWithoutCierresmensualesInput>
  }

  export type cierremensualdetallesScalarWhereInput = {
    AND?: cierremensualdetallesScalarWhereInput | cierremensualdetallesScalarWhereInput[]
    OR?: cierremensualdetallesScalarWhereInput[]
    NOT?: cierremensualdetallesScalarWhereInput | cierremensualdetallesScalarWhereInput[]
    id?: IntFilter<"cierremensualdetalles"> | number
    cierremensualid?: IntFilter<"cierremensualdetalles"> | number
    empleadoid?: IntFilter<"cierremensualdetalles"> | number
    diastrabajados?: IntFilter<"cierremensualdetalles"> | number
    ausenciasjustificadas?: IntFilter<"cierremensualdetalles"> | number
    ausenciasinjustificadas?: IntFilter<"cierremensualdetalles"> | number
    horasextra50?: IntFilter<"cierremensualdetalles"> | number
    horasextra100?: IntFilter<"cierremensualdetalles"> | number
    tardanzasacumuladas?: IntFilter<"cierremensualdetalles"> | number
  }

  export type usuariosUpsertWithoutCierresmensualesInput = {
    update: XOR<usuariosUpdateWithoutCierresmensualesInput, usuariosUncheckedUpdateWithoutCierresmensualesInput>
    create: XOR<usuariosCreateWithoutCierresmensualesInput, usuariosUncheckedCreateWithoutCierresmensualesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutCierresmensualesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutCierresmensualesInput, usuariosUncheckedUpdateWithoutCierresmensualesInput>
  }

  export type usuariosUpdateWithoutCierresmensualesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    fichadas?: fichadasUpdateManyWithoutUsuariosNestedInput
    empleados?: empleadosUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutCierresmensualesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empleadoid?: NullableIntFieldUpdateOperationsInput | number | null
    fichadas?: fichadasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type cierremensualdetallesCreateWithoutEmpleadosInput = {
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
    cierresmensuales: cierresmensualesCreateNestedOneWithoutCierremensualdetallesInput
  }

  export type cierremensualdetallesUncheckedCreateWithoutEmpleadosInput = {
    id?: number
    cierremensualid: number
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
  }

  export type cierremensualdetallesCreateOrConnectWithoutEmpleadosInput = {
    where: cierremensualdetallesWhereUniqueInput
    create: XOR<cierremensualdetallesCreateWithoutEmpleadosInput, cierremensualdetallesUncheckedCreateWithoutEmpleadosInput>
  }

  export type cierremensualdetallesCreateManyEmpleadosInputEnvelope = {
    data: cierremensualdetallesCreateManyEmpleadosInput | cierremensualdetallesCreateManyEmpleadosInput[]
    skipDuplicates?: boolean
  }

  export type horariosCreateWithoutEmpleadosInput = {
    nombre: string
    tipo: string
    diassemana: string
    horaentrada: Date | string
    horasalida: Date | string
    toleranciaentrada: number
    toleranciasalida: number
    descansoinicio?: Date | string | null
    descansofin?: Date | string | null
    minutosmindescanso: number
    umbralhorasextra: number
  }

  export type horariosUncheckedCreateWithoutEmpleadosInput = {
    id?: number
    nombre: string
    tipo: string
    diassemana: string
    horaentrada: Date | string
    horasalida: Date | string
    toleranciaentrada: number
    toleranciasalida: number
    descansoinicio?: Date | string | null
    descansofin?: Date | string | null
    minutosmindescanso: number
    umbralhorasextra: number
  }

  export type horariosCreateOrConnectWithoutEmpleadosInput = {
    where: horariosWhereUniqueInput
    create: XOR<horariosCreateWithoutEmpleadosInput, horariosUncheckedCreateWithoutEmpleadosInput>
  }

  export type fichadasCreateWithoutEmpleadosInput = {
    timestamp: Date | string
    tipo: string
    origen: string
    motivo?: string | null
    escorreccion?: boolean
    fichadas?: fichadasCreateNestedOneWithoutOther_fichadasInput
    other_fichadas?: fichadasCreateNestedManyWithoutFichadasInput
    usuarios?: usuariosCreateNestedOneWithoutFichadasInput
  }

  export type fichadasUncheckedCreateWithoutEmpleadosInput = {
    id?: number
    timestamp: Date | string
    tipo: string
    origen: string
    usuarioregistro?: number | null
    motivo?: string | null
    escorreccion?: boolean
    fichadaoriginalid?: number | null
    other_fichadas?: fichadasUncheckedCreateNestedManyWithoutFichadasInput
  }

  export type fichadasCreateOrConnectWithoutEmpleadosInput = {
    where: fichadasWhereUniqueInput
    create: XOR<fichadasCreateWithoutEmpleadosInput, fichadasUncheckedCreateWithoutEmpleadosInput>
  }

  export type fichadasCreateManyEmpleadosInputEnvelope = {
    data: fichadasCreateManyEmpleadosInput | fichadasCreateManyEmpleadosInput[]
    skipDuplicates?: boolean
  }

  export type novedadesCreateWithoutEmpleadosInput = {
    tipo: string
    fechasafectadas: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad: string
    estado: string
    origen: string
    observacion?: string | null
    periodo: string
  }

  export type novedadesUncheckedCreateWithoutEmpleadosInput = {
    id?: number
    tipo: string
    fechasafectadas: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad: string
    estado: string
    origen: string
    observacion?: string | null
    periodo: string
  }

  export type novedadesCreateOrConnectWithoutEmpleadosInput = {
    where: novedadesWhereUniqueInput
    create: XOR<novedadesCreateWithoutEmpleadosInput, novedadesUncheckedCreateWithoutEmpleadosInput>
  }

  export type novedadesCreateManyEmpleadosInputEnvelope = {
    data: novedadesCreateManyEmpleadosInput | novedadesCreateManyEmpleadosInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutEmpleadosInput = {
    nombre: string
    email: string
    passwordhash: string
    rol: string
    cierresmensuales?: cierresmensualesCreateNestedManyWithoutUsuariosInput
    fichadas?: fichadasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutEmpleadosInput = {
    id?: number
    nombre: string
    email: string
    passwordhash: string
    rol: string
    cierresmensuales?: cierresmensualesUncheckedCreateNestedManyWithoutUsuariosInput
    fichadas?: fichadasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutEmpleadosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutEmpleadosInput, usuariosUncheckedCreateWithoutEmpleadosInput>
  }

  export type usuariosCreateManyEmpleadosInputEnvelope = {
    data: usuariosCreateManyEmpleadosInput | usuariosCreateManyEmpleadosInput[]
    skipDuplicates?: boolean
  }

  export type cierremensualdetallesUpsertWithWhereUniqueWithoutEmpleadosInput = {
    where: cierremensualdetallesWhereUniqueInput
    update: XOR<cierremensualdetallesUpdateWithoutEmpleadosInput, cierremensualdetallesUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<cierremensualdetallesCreateWithoutEmpleadosInput, cierremensualdetallesUncheckedCreateWithoutEmpleadosInput>
  }

  export type cierremensualdetallesUpdateWithWhereUniqueWithoutEmpleadosInput = {
    where: cierremensualdetallesWhereUniqueInput
    data: XOR<cierremensualdetallesUpdateWithoutEmpleadosInput, cierremensualdetallesUncheckedUpdateWithoutEmpleadosInput>
  }

  export type cierremensualdetallesUpdateManyWithWhereWithoutEmpleadosInput = {
    where: cierremensualdetallesScalarWhereInput
    data: XOR<cierremensualdetallesUpdateManyMutationInput, cierremensualdetallesUncheckedUpdateManyWithoutEmpleadosInput>
  }

  export type horariosUpsertWithoutEmpleadosInput = {
    update: XOR<horariosUpdateWithoutEmpleadosInput, horariosUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<horariosCreateWithoutEmpleadosInput, horariosUncheckedCreateWithoutEmpleadosInput>
    where?: horariosWhereInput
  }

  export type horariosUpdateToOneWithWhereWithoutEmpleadosInput = {
    where?: horariosWhereInput
    data: XOR<horariosUpdateWithoutEmpleadosInput, horariosUncheckedUpdateWithoutEmpleadosInput>
  }

  export type horariosUpdateWithoutEmpleadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    diassemana?: StringFieldUpdateOperationsInput | string
    horaentrada?: DateTimeFieldUpdateOperationsInput | Date | string
    horasalida?: DateTimeFieldUpdateOperationsInput | Date | string
    toleranciaentrada?: IntFieldUpdateOperationsInput | number
    toleranciasalida?: IntFieldUpdateOperationsInput | number
    descansoinicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descansofin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutosmindescanso?: IntFieldUpdateOperationsInput | number
    umbralhorasextra?: IntFieldUpdateOperationsInput | number
  }

  export type horariosUncheckedUpdateWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    diassemana?: StringFieldUpdateOperationsInput | string
    horaentrada?: DateTimeFieldUpdateOperationsInput | Date | string
    horasalida?: DateTimeFieldUpdateOperationsInput | Date | string
    toleranciaentrada?: IntFieldUpdateOperationsInput | number
    toleranciasalida?: IntFieldUpdateOperationsInput | number
    descansoinicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descansofin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutosmindescanso?: IntFieldUpdateOperationsInput | number
    umbralhorasextra?: IntFieldUpdateOperationsInput | number
  }

  export type fichadasUpsertWithWhereUniqueWithoutEmpleadosInput = {
    where: fichadasWhereUniqueInput
    update: XOR<fichadasUpdateWithoutEmpleadosInput, fichadasUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<fichadasCreateWithoutEmpleadosInput, fichadasUncheckedCreateWithoutEmpleadosInput>
  }

  export type fichadasUpdateWithWhereUniqueWithoutEmpleadosInput = {
    where: fichadasWhereUniqueInput
    data: XOR<fichadasUpdateWithoutEmpleadosInput, fichadasUncheckedUpdateWithoutEmpleadosInput>
  }

  export type fichadasUpdateManyWithWhereWithoutEmpleadosInput = {
    where: fichadasScalarWhereInput
    data: XOR<fichadasUpdateManyMutationInput, fichadasUncheckedUpdateManyWithoutEmpleadosInput>
  }

  export type fichadasScalarWhereInput = {
    AND?: fichadasScalarWhereInput | fichadasScalarWhereInput[]
    OR?: fichadasScalarWhereInput[]
    NOT?: fichadasScalarWhereInput | fichadasScalarWhereInput[]
    id?: IntFilter<"fichadas"> | number
    empleadoid?: IntFilter<"fichadas"> | number
    timestamp?: DateTimeFilter<"fichadas"> | Date | string
    tipo?: StringFilter<"fichadas"> | string
    origen?: StringFilter<"fichadas"> | string
    usuarioregistro?: IntNullableFilter<"fichadas"> | number | null
    motivo?: StringNullableFilter<"fichadas"> | string | null
    escorreccion?: BoolFilter<"fichadas"> | boolean
    fichadaoriginalid?: IntNullableFilter<"fichadas"> | number | null
  }

  export type novedadesUpsertWithWhereUniqueWithoutEmpleadosInput = {
    where: novedadesWhereUniqueInput
    update: XOR<novedadesUpdateWithoutEmpleadosInput, novedadesUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<novedadesCreateWithoutEmpleadosInput, novedadesUncheckedCreateWithoutEmpleadosInput>
  }

  export type novedadesUpdateWithWhereUniqueWithoutEmpleadosInput = {
    where: novedadesWhereUniqueInput
    data: XOR<novedadesUpdateWithoutEmpleadosInput, novedadesUncheckedUpdateWithoutEmpleadosInput>
  }

  export type novedadesUpdateManyWithWhereWithoutEmpleadosInput = {
    where: novedadesScalarWhereInput
    data: XOR<novedadesUpdateManyMutationInput, novedadesUncheckedUpdateManyWithoutEmpleadosInput>
  }

  export type novedadesScalarWhereInput = {
    AND?: novedadesScalarWhereInput | novedadesScalarWhereInput[]
    OR?: novedadesScalarWhereInput[]
    NOT?: novedadesScalarWhereInput | novedadesScalarWhereInput[]
    id?: IntFilter<"novedades"> | number
    empleadoid?: IntFilter<"novedades"> | number
    tipo?: StringFilter<"novedades"> | string
    fechasafectadas?: StringFilter<"novedades"> | string
    cantidad?: DecimalFilter<"novedades"> | Decimal | DecimalJsLike | number | string
    unidad?: StringFilter<"novedades"> | string
    estado?: StringFilter<"novedades"> | string
    origen?: StringFilter<"novedades"> | string
    observacion?: StringNullableFilter<"novedades"> | string | null
    periodo?: StringFilter<"novedades"> | string
  }

  export type usuariosUpsertWithWhereUniqueWithoutEmpleadosInput = {
    where: usuariosWhereUniqueInput
    update: XOR<usuariosUpdateWithoutEmpleadosInput, usuariosUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<usuariosCreateWithoutEmpleadosInput, usuariosUncheckedCreateWithoutEmpleadosInput>
  }

  export type usuariosUpdateWithWhereUniqueWithoutEmpleadosInput = {
    where: usuariosWhereUniqueInput
    data: XOR<usuariosUpdateWithoutEmpleadosInput, usuariosUncheckedUpdateWithoutEmpleadosInput>
  }

  export type usuariosUpdateManyWithWhereWithoutEmpleadosInput = {
    where: usuariosScalarWhereInput
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyWithoutEmpleadosInput>
  }

  export type usuariosScalarWhereInput = {
    AND?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    OR?: usuariosScalarWhereInput[]
    NOT?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    passwordhash?: StringFilter<"usuarios"> | string
    rol?: StringFilter<"usuarios"> | string
    empleadoid?: IntNullableFilter<"usuarios"> | number | null
  }

  export type empleadosCreateWithoutFichadasInput = {
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesCreateNestedManyWithoutEmpleadosInput
    horarios: horariosCreateNestedOneWithoutEmpleadosInput
    novedades?: novedadesCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosUncheckedCreateWithoutFichadasInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    horarioid: number
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesUncheckedCreateNestedManyWithoutEmpleadosInput
    novedades?: novedadesUncheckedCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosUncheckedCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosCreateOrConnectWithoutFichadasInput = {
    where: empleadosWhereUniqueInput
    create: XOR<empleadosCreateWithoutFichadasInput, empleadosUncheckedCreateWithoutFichadasInput>
  }

  export type fichadasCreateWithoutOther_fichadasInput = {
    timestamp: Date | string
    tipo: string
    origen: string
    motivo?: string | null
    escorreccion?: boolean
    empleados: empleadosCreateNestedOneWithoutFichadasInput
    fichadas?: fichadasCreateNestedOneWithoutOther_fichadasInput
    usuarios?: usuariosCreateNestedOneWithoutFichadasInput
  }

  export type fichadasUncheckedCreateWithoutOther_fichadasInput = {
    id?: number
    empleadoid: number
    timestamp: Date | string
    tipo: string
    origen: string
    usuarioregistro?: number | null
    motivo?: string | null
    escorreccion?: boolean
    fichadaoriginalid?: number | null
  }

  export type fichadasCreateOrConnectWithoutOther_fichadasInput = {
    where: fichadasWhereUniqueInput
    create: XOR<fichadasCreateWithoutOther_fichadasInput, fichadasUncheckedCreateWithoutOther_fichadasInput>
  }

  export type fichadasCreateWithoutFichadasInput = {
    timestamp: Date | string
    tipo: string
    origen: string
    motivo?: string | null
    escorreccion?: boolean
    empleados: empleadosCreateNestedOneWithoutFichadasInput
    other_fichadas?: fichadasCreateNestedManyWithoutFichadasInput
    usuarios?: usuariosCreateNestedOneWithoutFichadasInput
  }

  export type fichadasUncheckedCreateWithoutFichadasInput = {
    id?: number
    empleadoid: number
    timestamp: Date | string
    tipo: string
    origen: string
    usuarioregistro?: number | null
    motivo?: string | null
    escorreccion?: boolean
    other_fichadas?: fichadasUncheckedCreateNestedManyWithoutFichadasInput
  }

  export type fichadasCreateOrConnectWithoutFichadasInput = {
    where: fichadasWhereUniqueInput
    create: XOR<fichadasCreateWithoutFichadasInput, fichadasUncheckedCreateWithoutFichadasInput>
  }

  export type fichadasCreateManyFichadasInputEnvelope = {
    data: fichadasCreateManyFichadasInput | fichadasCreateManyFichadasInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutFichadasInput = {
    nombre: string
    email: string
    passwordhash: string
    rol: string
    cierresmensuales?: cierresmensualesCreateNestedManyWithoutUsuariosInput
    empleados?: empleadosCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutFichadasInput = {
    id?: number
    nombre: string
    email: string
    passwordhash: string
    rol: string
    empleadoid?: number | null
    cierresmensuales?: cierresmensualesUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutFichadasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutFichadasInput, usuariosUncheckedCreateWithoutFichadasInput>
  }

  export type empleadosUpsertWithoutFichadasInput = {
    update: XOR<empleadosUpdateWithoutFichadasInput, empleadosUncheckedUpdateWithoutFichadasInput>
    create: XOR<empleadosCreateWithoutFichadasInput, empleadosUncheckedCreateWithoutFichadasInput>
    where?: empleadosWhereInput
  }

  export type empleadosUpdateToOneWithWhereWithoutFichadasInput = {
    where?: empleadosWhereInput
    data: XOR<empleadosUpdateWithoutFichadasInput, empleadosUncheckedUpdateWithoutFichadasInput>
  }

  export type empleadosUpdateWithoutFichadasInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUpdateManyWithoutEmpleadosNestedInput
    horarios?: horariosUpdateOneRequiredWithoutEmpleadosNestedInput
    novedades?: novedadesUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUpdateManyWithoutEmpleadosNestedInput
  }

  export type empleadosUncheckedUpdateWithoutFichadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    horarioid?: IntFieldUpdateOperationsInput | number
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUncheckedUpdateManyWithoutEmpleadosNestedInput
    novedades?: novedadesUncheckedUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUncheckedUpdateManyWithoutEmpleadosNestedInput
  }

  export type fichadasUpsertWithoutOther_fichadasInput = {
    update: XOR<fichadasUpdateWithoutOther_fichadasInput, fichadasUncheckedUpdateWithoutOther_fichadasInput>
    create: XOR<fichadasCreateWithoutOther_fichadasInput, fichadasUncheckedCreateWithoutOther_fichadasInput>
    where?: fichadasWhereInput
  }

  export type fichadasUpdateToOneWithWhereWithoutOther_fichadasInput = {
    where?: fichadasWhereInput
    data: XOR<fichadasUpdateWithoutOther_fichadasInput, fichadasUncheckedUpdateWithoutOther_fichadasInput>
  }

  export type fichadasUpdateWithoutOther_fichadasInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    empleados?: empleadosUpdateOneRequiredWithoutFichadasNestedInput
    fichadas?: fichadasUpdateOneWithoutOther_fichadasNestedInput
    usuarios?: usuariosUpdateOneWithoutFichadasNestedInput
  }

  export type fichadasUncheckedUpdateWithoutOther_fichadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    usuarioregistro?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    fichadaoriginalid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type fichadasUpsertWithWhereUniqueWithoutFichadasInput = {
    where: fichadasWhereUniqueInput
    update: XOR<fichadasUpdateWithoutFichadasInput, fichadasUncheckedUpdateWithoutFichadasInput>
    create: XOR<fichadasCreateWithoutFichadasInput, fichadasUncheckedCreateWithoutFichadasInput>
  }

  export type fichadasUpdateWithWhereUniqueWithoutFichadasInput = {
    where: fichadasWhereUniqueInput
    data: XOR<fichadasUpdateWithoutFichadasInput, fichadasUncheckedUpdateWithoutFichadasInput>
  }

  export type fichadasUpdateManyWithWhereWithoutFichadasInput = {
    where: fichadasScalarWhereInput
    data: XOR<fichadasUpdateManyMutationInput, fichadasUncheckedUpdateManyWithoutFichadasInput>
  }

  export type usuariosUpsertWithoutFichadasInput = {
    update: XOR<usuariosUpdateWithoutFichadasInput, usuariosUncheckedUpdateWithoutFichadasInput>
    create: XOR<usuariosCreateWithoutFichadasInput, usuariosUncheckedCreateWithoutFichadasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutFichadasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutFichadasInput, usuariosUncheckedUpdateWithoutFichadasInput>
  }

  export type usuariosUpdateWithoutFichadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    cierresmensuales?: cierresmensualesUpdateManyWithoutUsuariosNestedInput
    empleados?: empleadosUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutFichadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empleadoid?: NullableIntFieldUpdateOperationsInput | number | null
    cierresmensuales?: cierresmensualesUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type empleadosCreateWithoutHorariosInput = {
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesCreateNestedManyWithoutEmpleadosInput
    fichadas?: fichadasCreateNestedManyWithoutEmpleadosInput
    novedades?: novedadesCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosUncheckedCreateWithoutHorariosInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesUncheckedCreateNestedManyWithoutEmpleadosInput
    fichadas?: fichadasUncheckedCreateNestedManyWithoutEmpleadosInput
    novedades?: novedadesUncheckedCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosUncheckedCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosCreateOrConnectWithoutHorariosInput = {
    where: empleadosWhereUniqueInput
    create: XOR<empleadosCreateWithoutHorariosInput, empleadosUncheckedCreateWithoutHorariosInput>
  }

  export type empleadosCreateManyHorariosInputEnvelope = {
    data: empleadosCreateManyHorariosInput | empleadosCreateManyHorariosInput[]
    skipDuplicates?: boolean
  }

  export type empleadosUpsertWithWhereUniqueWithoutHorariosInput = {
    where: empleadosWhereUniqueInput
    update: XOR<empleadosUpdateWithoutHorariosInput, empleadosUncheckedUpdateWithoutHorariosInput>
    create: XOR<empleadosCreateWithoutHorariosInput, empleadosUncheckedCreateWithoutHorariosInput>
  }

  export type empleadosUpdateWithWhereUniqueWithoutHorariosInput = {
    where: empleadosWhereUniqueInput
    data: XOR<empleadosUpdateWithoutHorariosInput, empleadosUncheckedUpdateWithoutHorariosInput>
  }

  export type empleadosUpdateManyWithWhereWithoutHorariosInput = {
    where: empleadosScalarWhereInput
    data: XOR<empleadosUpdateManyMutationInput, empleadosUncheckedUpdateManyWithoutHorariosInput>
  }

  export type empleadosScalarWhereInput = {
    AND?: empleadosScalarWhereInput | empleadosScalarWhereInput[]
    OR?: empleadosScalarWhereInput[]
    NOT?: empleadosScalarWhereInput | empleadosScalarWhereInput[]
    id?: IntFilter<"empleados"> | number
    legajo?: StringFilter<"empleados"> | string
    nombre?: StringFilter<"empleados"> | string
    apellido?: StringFilter<"empleados"> | string
    dni?: StringFilter<"empleados"> | string
    cuil?: StringFilter<"empleados"> | string
    fechaingreso?: DateTimeFilter<"empleados"> | Date | string
    categorialaboral?: StringFilter<"empleados"> | string
    convenio?: StringNullableFilter<"empleados"> | string | null
    tipojornada?: StringFilter<"empleados"> | string
    horarioid?: IntFilter<"empleados"> | number
    diasdescanso?: StringFilter<"empleados"> | string
    modalidadfichada?: StringFilter<"empleados"> | string
    estado?: StringFilter<"empleados"> | string
  }

  export type empleadosCreateWithoutNovedadesInput = {
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesCreateNestedManyWithoutEmpleadosInput
    horarios: horariosCreateNestedOneWithoutEmpleadosInput
    fichadas?: fichadasCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosUncheckedCreateWithoutNovedadesInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    horarioid: number
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesUncheckedCreateNestedManyWithoutEmpleadosInput
    fichadas?: fichadasUncheckedCreateNestedManyWithoutEmpleadosInput
    usuarios?: usuariosUncheckedCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosCreateOrConnectWithoutNovedadesInput = {
    where: empleadosWhereUniqueInput
    create: XOR<empleadosCreateWithoutNovedadesInput, empleadosUncheckedCreateWithoutNovedadesInput>
  }

  export type empleadosUpsertWithoutNovedadesInput = {
    update: XOR<empleadosUpdateWithoutNovedadesInput, empleadosUncheckedUpdateWithoutNovedadesInput>
    create: XOR<empleadosCreateWithoutNovedadesInput, empleadosUncheckedCreateWithoutNovedadesInput>
    where?: empleadosWhereInput
  }

  export type empleadosUpdateToOneWithWhereWithoutNovedadesInput = {
    where?: empleadosWhereInput
    data: XOR<empleadosUpdateWithoutNovedadesInput, empleadosUncheckedUpdateWithoutNovedadesInput>
  }

  export type empleadosUpdateWithoutNovedadesInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUpdateManyWithoutEmpleadosNestedInput
    horarios?: horariosUpdateOneRequiredWithoutEmpleadosNestedInput
    fichadas?: fichadasUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUpdateManyWithoutEmpleadosNestedInput
  }

  export type empleadosUncheckedUpdateWithoutNovedadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    horarioid?: IntFieldUpdateOperationsInput | number
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUncheckedUpdateManyWithoutEmpleadosNestedInput
    fichadas?: fichadasUncheckedUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUncheckedUpdateManyWithoutEmpleadosNestedInput
  }

  export type cierresmensualesCreateWithoutUsuariosInput = {
    periodo: string
    fechacierre?: Date | string | null
    estado: string
    cierremensualdetalles?: cierremensualdetallesCreateNestedManyWithoutCierresmensualesInput
  }

  export type cierresmensualesUncheckedCreateWithoutUsuariosInput = {
    id?: number
    periodo: string
    fechacierre?: Date | string | null
    estado: string
    cierremensualdetalles?: cierremensualdetallesUncheckedCreateNestedManyWithoutCierresmensualesInput
  }

  export type cierresmensualesCreateOrConnectWithoutUsuariosInput = {
    where: cierresmensualesWhereUniqueInput
    create: XOR<cierresmensualesCreateWithoutUsuariosInput, cierresmensualesUncheckedCreateWithoutUsuariosInput>
  }

  export type cierresmensualesCreateManyUsuariosInputEnvelope = {
    data: cierresmensualesCreateManyUsuariosInput | cierresmensualesCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type fichadasCreateWithoutUsuariosInput = {
    timestamp: Date | string
    tipo: string
    origen: string
    motivo?: string | null
    escorreccion?: boolean
    empleados: empleadosCreateNestedOneWithoutFichadasInput
    fichadas?: fichadasCreateNestedOneWithoutOther_fichadasInput
    other_fichadas?: fichadasCreateNestedManyWithoutFichadasInput
  }

  export type fichadasUncheckedCreateWithoutUsuariosInput = {
    id?: number
    empleadoid: number
    timestamp: Date | string
    tipo: string
    origen: string
    motivo?: string | null
    escorreccion?: boolean
    fichadaoriginalid?: number | null
    other_fichadas?: fichadasUncheckedCreateNestedManyWithoutFichadasInput
  }

  export type fichadasCreateOrConnectWithoutUsuariosInput = {
    where: fichadasWhereUniqueInput
    create: XOR<fichadasCreateWithoutUsuariosInput, fichadasUncheckedCreateWithoutUsuariosInput>
  }

  export type fichadasCreateManyUsuariosInputEnvelope = {
    data: fichadasCreateManyUsuariosInput | fichadasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type empleadosCreateWithoutUsuariosInput = {
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesCreateNestedManyWithoutEmpleadosInput
    horarios: horariosCreateNestedOneWithoutEmpleadosInput
    fichadas?: fichadasCreateNestedManyWithoutEmpleadosInput
    novedades?: novedadesCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosUncheckedCreateWithoutUsuariosInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    horarioid: number
    diasdescanso: string
    modalidadfichada: string
    estado: string
    cierremensualdetalles?: cierremensualdetallesUncheckedCreateNestedManyWithoutEmpleadosInput
    fichadas?: fichadasUncheckedCreateNestedManyWithoutEmpleadosInput
    novedades?: novedadesUncheckedCreateNestedManyWithoutEmpleadosInput
  }

  export type empleadosCreateOrConnectWithoutUsuariosInput = {
    where: empleadosWhereUniqueInput
    create: XOR<empleadosCreateWithoutUsuariosInput, empleadosUncheckedCreateWithoutUsuariosInput>
  }

  export type cierresmensualesUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: cierresmensualesWhereUniqueInput
    update: XOR<cierresmensualesUpdateWithoutUsuariosInput, cierresmensualesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<cierresmensualesCreateWithoutUsuariosInput, cierresmensualesUncheckedCreateWithoutUsuariosInput>
  }

  export type cierresmensualesUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: cierresmensualesWhereUniqueInput
    data: XOR<cierresmensualesUpdateWithoutUsuariosInput, cierresmensualesUncheckedUpdateWithoutUsuariosInput>
  }

  export type cierresmensualesUpdateManyWithWhereWithoutUsuariosInput = {
    where: cierresmensualesScalarWhereInput
    data: XOR<cierresmensualesUpdateManyMutationInput, cierresmensualesUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type cierresmensualesScalarWhereInput = {
    AND?: cierresmensualesScalarWhereInput | cierresmensualesScalarWhereInput[]
    OR?: cierresmensualesScalarWhereInput[]
    NOT?: cierresmensualesScalarWhereInput | cierresmensualesScalarWhereInput[]
    id?: IntFilter<"cierresmensuales"> | number
    periodo?: StringFilter<"cierresmensuales"> | string
    fechacierre?: DateTimeNullableFilter<"cierresmensuales"> | Date | string | null
    usuariocierreid?: IntNullableFilter<"cierresmensuales"> | number | null
    estado?: StringFilter<"cierresmensuales"> | string
  }

  export type fichadasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: fichadasWhereUniqueInput
    update: XOR<fichadasUpdateWithoutUsuariosInput, fichadasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<fichadasCreateWithoutUsuariosInput, fichadasUncheckedCreateWithoutUsuariosInput>
  }

  export type fichadasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: fichadasWhereUniqueInput
    data: XOR<fichadasUpdateWithoutUsuariosInput, fichadasUncheckedUpdateWithoutUsuariosInput>
  }

  export type fichadasUpdateManyWithWhereWithoutUsuariosInput = {
    where: fichadasScalarWhereInput
    data: XOR<fichadasUpdateManyMutationInput, fichadasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type empleadosUpsertWithoutUsuariosInput = {
    update: XOR<empleadosUpdateWithoutUsuariosInput, empleadosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<empleadosCreateWithoutUsuariosInput, empleadosUncheckedCreateWithoutUsuariosInput>
    where?: empleadosWhereInput
  }

  export type empleadosUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: empleadosWhereInput
    data: XOR<empleadosUpdateWithoutUsuariosInput, empleadosUncheckedUpdateWithoutUsuariosInput>
  }

  export type empleadosUpdateWithoutUsuariosInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUpdateManyWithoutEmpleadosNestedInput
    horarios?: horariosUpdateOneRequiredWithoutEmpleadosNestedInput
    fichadas?: fichadasUpdateManyWithoutEmpleadosNestedInput
    novedades?: novedadesUpdateManyWithoutEmpleadosNestedInput
  }

  export type empleadosUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    horarioid?: IntFieldUpdateOperationsInput | number
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUncheckedUpdateManyWithoutEmpleadosNestedInput
    fichadas?: fichadasUncheckedUpdateManyWithoutEmpleadosNestedInput
    novedades?: novedadesUncheckedUpdateManyWithoutEmpleadosNestedInput
  }

  export type cierremensualdetallesCreateManyCierresmensualesInput = {
    id?: number
    empleadoid: number
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
  }

  export type cierremensualdetallesUpdateWithoutCierresmensualesInput = {
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
    empleados?: empleadosUpdateOneRequiredWithoutCierremensualdetallesNestedInput
  }

  export type cierremensualdetallesUncheckedUpdateWithoutCierresmensualesInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
  }

  export type cierremensualdetallesUncheckedUpdateManyWithoutCierresmensualesInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
  }

  export type cierremensualdetallesCreateManyEmpleadosInput = {
    id?: number
    cierremensualid: number
    diastrabajados: number
    ausenciasjustificadas: number
    ausenciasinjustificadas: number
    horasextra50: number
    horasextra100: number
    tardanzasacumuladas: number
  }

  export type fichadasCreateManyEmpleadosInput = {
    id?: number
    timestamp: Date | string
    tipo: string
    origen: string
    usuarioregistro?: number | null
    motivo?: string | null
    escorreccion?: boolean
    fichadaoriginalid?: number | null
  }

  export type novedadesCreateManyEmpleadosInput = {
    id?: number
    tipo: string
    fechasafectadas: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad: string
    estado: string
    origen: string
    observacion?: string | null
    periodo: string
  }

  export type usuariosCreateManyEmpleadosInput = {
    id?: number
    nombre: string
    email: string
    passwordhash: string
    rol: string
  }

  export type cierremensualdetallesUpdateWithoutEmpleadosInput = {
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
    cierresmensuales?: cierresmensualesUpdateOneRequiredWithoutCierremensualdetallesNestedInput
  }

  export type cierremensualdetallesUncheckedUpdateWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cierremensualid?: IntFieldUpdateOperationsInput | number
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
  }

  export type cierremensualdetallesUncheckedUpdateManyWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cierremensualid?: IntFieldUpdateOperationsInput | number
    diastrabajados?: IntFieldUpdateOperationsInput | number
    ausenciasjustificadas?: IntFieldUpdateOperationsInput | number
    ausenciasinjustificadas?: IntFieldUpdateOperationsInput | number
    horasextra50?: IntFieldUpdateOperationsInput | number
    horasextra100?: IntFieldUpdateOperationsInput | number
    tardanzasacumuladas?: IntFieldUpdateOperationsInput | number
  }

  export type fichadasUpdateWithoutEmpleadosInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    fichadas?: fichadasUpdateOneWithoutOther_fichadasNestedInput
    other_fichadas?: fichadasUpdateManyWithoutFichadasNestedInput
    usuarios?: usuariosUpdateOneWithoutFichadasNestedInput
  }

  export type fichadasUncheckedUpdateWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    usuarioregistro?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    fichadaoriginalid?: NullableIntFieldUpdateOperationsInput | number | null
    other_fichadas?: fichadasUncheckedUpdateManyWithoutFichadasNestedInput
  }

  export type fichadasUncheckedUpdateManyWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    usuarioregistro?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    fichadaoriginalid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type novedadesUpdateWithoutEmpleadosInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    fechasafectadas?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    periodo?: StringFieldUpdateOperationsInput | string
  }

  export type novedadesUncheckedUpdateWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    fechasafectadas?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    periodo?: StringFieldUpdateOperationsInput | string
  }

  export type novedadesUncheckedUpdateManyWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    fechasafectadas?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    periodo?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUpdateWithoutEmpleadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    cierresmensuales?: cierresmensualesUpdateManyWithoutUsuariosNestedInput
    fichadas?: fichadasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    cierresmensuales?: cierresmensualesUncheckedUpdateManyWithoutUsuariosNestedInput
    fichadas?: fichadasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateManyWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordhash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type fichadasCreateManyFichadasInput = {
    id?: number
    empleadoid: number
    timestamp: Date | string
    tipo: string
    origen: string
    usuarioregistro?: number | null
    motivo?: string | null
    escorreccion?: boolean
  }

  export type fichadasUpdateWithoutFichadasInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    empleados?: empleadosUpdateOneRequiredWithoutFichadasNestedInput
    other_fichadas?: fichadasUpdateManyWithoutFichadasNestedInput
    usuarios?: usuariosUpdateOneWithoutFichadasNestedInput
  }

  export type fichadasUncheckedUpdateWithoutFichadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    usuarioregistro?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    other_fichadas?: fichadasUncheckedUpdateManyWithoutFichadasNestedInput
  }

  export type fichadasUncheckedUpdateManyWithoutFichadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    usuarioregistro?: NullableIntFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
  }

  export type empleadosCreateManyHorariosInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    dni: string
    cuil: string
    fechaingreso: Date | string
    categorialaboral: string
    convenio?: string | null
    tipojornada: string
    diasdescanso: string
    modalidadfichada: string
    estado: string
  }

  export type empleadosUpdateWithoutHorariosInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUpdateManyWithoutEmpleadosNestedInput
    fichadas?: fichadasUpdateManyWithoutEmpleadosNestedInput
    novedades?: novedadesUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUpdateManyWithoutEmpleadosNestedInput
  }

  export type empleadosUncheckedUpdateWithoutHorariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUncheckedUpdateManyWithoutEmpleadosNestedInput
    fichadas?: fichadasUncheckedUpdateManyWithoutEmpleadosNestedInput
    novedades?: novedadesUncheckedUpdateManyWithoutEmpleadosNestedInput
    usuarios?: usuariosUncheckedUpdateManyWithoutEmpleadosNestedInput
  }

  export type empleadosUncheckedUpdateManyWithoutHorariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    categorialaboral?: StringFieldUpdateOperationsInput | string
    convenio?: NullableStringFieldUpdateOperationsInput | string | null
    tipojornada?: StringFieldUpdateOperationsInput | string
    diasdescanso?: StringFieldUpdateOperationsInput | string
    modalidadfichada?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type cierresmensualesCreateManyUsuariosInput = {
    id?: number
    periodo: string
    fechacierre?: Date | string | null
    estado: string
  }

  export type fichadasCreateManyUsuariosInput = {
    id?: number
    empleadoid: number
    timestamp: Date | string
    tipo: string
    origen: string
    motivo?: string | null
    escorreccion?: boolean
    fichadaoriginalid?: number | null
  }

  export type cierresmensualesUpdateWithoutUsuariosInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    fechacierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUpdateManyWithoutCierresmensualesNestedInput
  }

  export type cierresmensualesUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: StringFieldUpdateOperationsInput | string
    fechacierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cierremensualdetalles?: cierremensualdetallesUncheckedUpdateManyWithoutCierresmensualesNestedInput
  }

  export type cierresmensualesUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: StringFieldUpdateOperationsInput | string
    fechacierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type fichadasUpdateWithoutUsuariosInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    empleados?: empleadosUpdateOneRequiredWithoutFichadasNestedInput
    fichadas?: fichadasUpdateOneWithoutOther_fichadasNestedInput
    other_fichadas?: fichadasUpdateManyWithoutFichadasNestedInput
  }

  export type fichadasUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    fichadaoriginalid?: NullableIntFieldUpdateOperationsInput | number | null
    other_fichadas?: fichadasUncheckedUpdateManyWithoutFichadasNestedInput
  }

  export type fichadasUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoid?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    escorreccion?: BoolFieldUpdateOperationsInput | boolean
    fichadaoriginalid?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}