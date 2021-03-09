/**
 * @Refs
 *  1. https://data-flair.training/blogs/apache-cassandra-tutorial/
 *  when to use and why cassandra
 *  2. https://towardsdatascience.com/when-to-use-cassandra-and-when-to-steer-clear-72b7f2cede76
 *
 * */

/**
 * Data:
 *  - Data is collection of distinct unit's of information which can be transformed into perticular
 *   form for Efficient movement and procesing
 * Database:
 *  - Structured collection of organized data to make it easily accessible, manageable and update.
 *  - Correct analogy is library.
 *      - Library is database and books are the data.
 *  Facts :
 *   1. Databases have evolved dramatically since their inception in the early 1960s.
 *   2. Some Navigational databases such as the Hierarchical database and the Network database were the original systems used to store and manipulate data.
 *     Although these early systems were actually inflexible
 *   3. In the early 1980s, Relational databases became very popular, which was followed by object-oriented databases later on.
 *   4. More recently, NoSQL databases came up as a response to the growth of the internet and the need for faster speed and processing of unstructured data.
 *   5. Today, we have cloud databases and self-driving databases that are creating a new ground when it comes to how data is collected, stored, managed, and utilized.
 *
 *  What are the Types of Databases
 *  1. Relational Database : Postgresql, MySql, IBM DB2
 *        - read and write of operation is faster
 *        - can perform complex
 *        - sql (structured query languag)
 *  2. NoSQL Database :
 *        - Which is not going to have tables and columns
 *        - Mongodb is no sql document database. disadvantage is size of document 16mb mongodb.
 *        - Cassandra is also no sql data. (cassandra query languae)
 *  3. Object-Oriented Database
 *  4. Distributed Database
 *  5. Graph Database (nodes | edges)
 *  6. Cloud Database
 *  7. Centralization Database
 *  8. Operational Database
 *  9. Heirchical Database
 *  10. Network database
 *
 */

/**
 *   Classical Concept object oriented programming
 *  -->
 *
 */

/**
 *  @CASSANDRA
 *    Apache Cassandra is an example of NoSQL Database.
 *    # What is Apache Cassandra? 2008 introduce facebook
 *    It is a distributed, decentralized and an open-source database or a storage system, for managing very large amounts of structured data spread out across the world.
 *    It is basically used for managing very large amounts of structured data.
 *    There is no single point of failure,
 *     providing highly available services.
 *      Apache Cassandra, enables organisations to process large volumes of fast moving data in a reliable and scalable way.
 *      That’s why companies like Facebook, Instagram and Netflix use Apache Cassandra for mission-critical features
 *   ### major benefits, challenges and use cases of Apache Cassandra
 *      - Performance and speed.
 *      - Scalability
 *      - Reliability – data replication and HA
 *      - It is scalable, fault-tolerant, and consistent.
 *      - It is a column-oriented database.
 *      - Its distribution design is based on Amazon’s Dynamo and its data model on Google’s Bigtable.
 *      - Created at Facebook, it differs sharply from relational database management systems.
 *      - Cassandra implements a Dynamo-style replication model with no single point of failure, but adds a more powerful “column family” data model.
 *      - Cassandra is being used by some of the biggest companies such as Facebook, Twitter, Cisco, Rackspace, ebay, Twitter, Netflix, and more.
 *
 *
 *  @FEATURES :
 *      1. Elastic scalability : allow to add more hardware to accomodate more customer and data as per requirement.
 *      2. Always on architecture - Continuously available for the businesss critical app as there is no point of failure.
 *      3. Fast linear-scale performance -
 *      6. Transaction support
 *      8. Fast writes : can write 100's of TB data w/o sacrifacing read efficiency.
 *
 *  @Architecture :
 *    1. Node : it is place where the data get stored.
 *      - all the noes in cluster play the same role, each node is indepenent and at the same time iterconnected to other nodes.
 *      - Each node in a cluster can accept read and write requests, regardless of where the data is actually located in the cluster.
 *      - When a node goes down, read/write requests can be served from other nodes in the network.
 *    2. Data Center : It is a collection of related nodes.
 *    3. Cluster : it's component which contains one or more data centers
 *    4. Commit Log : It is a mechanism in Cassandra for crash recovery when it crashes,every write operation written to commit log.
 *    5. Mem table : It is a memory resident data structure.
 *    6. SSTable :  content of mem-table reach the threshold value, the data is flushed here.
 *    7. Bloom Filter : quick algorithms to test if an element is a member of a set
 *
 *  @CassandraQueryLanguage :
 *         > cql treats database (keyspace ) as container of tables.
 *         > cqlsh : terminal prompt to work with cql
 *
 *  @WriteOperations
 *      > Every write activity of nodes is captured by the commit logs written in the nodes.
 *      > Later the data will be captured and stored in the mem-table.
 *      > Whenever the mem-table is full, data will be written into the SStable data file.
 *      > All writes are automatically partitioned and replicated throughout the cluster.
 *      > Cassandra periodically consolidates the SSTables, discarding unnecessary data.
 *  @ReadOperations
 *      > During read operations, Cassandra gets values from the mem-table and
 *      > checks the bloom filter to find the appropriate SSTable that holds the required data.
 *
 *  @Installing
 *      - https://phoenixnap.com/kb/install-cassandra-on-windows
 *      - https://medium.com/@manishyadavv/how-to-install-cassandra-on-mac-os-d9338fcfcba4
 *      - https://phoenixnap.com/kb/install-cassandra-on-ubuntu
 *
 *    - To have launchd start cassandra now and restart at login:
 *        `` brew services start cassandra ``
 *    - TO Just run the cassandra simply
 *        `` cassandra -f ``
 *  old network
 *  simple strategy
 *  network strategy
 *
 * //// CQLSH
 * 
 * CREATE KEYSPACE grocery WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 2}
 *    -----
 * CREATE TABLE IF NOT EXISTS  grocery.dailyneeds_box (itemId  TEXT, name TEXT, price DECIMAL, PRIMARY KEY (itemId))
 * 
 * INSERT INTO grocery.dailyneeds_box(item, name, price) VALUES ("BREAD_1",'BREAD', 20);
 * INSERT INTO grocery.dailyneeds_box(item, name, price) VALUES ("BREAD_1",'BREED', 20);
 * INSERT INTO grocery.dailyneeds_box(item, name, price) VALUES ("BREAD_1",'BREADD', 20);
 * INSERT INTO grocery.dailyneeds_box(item, name, price) VALUES ("BREAD_1",'BREADS', 20);
 * 
 * SELECT * from grocery.dailyneeds_box WHERE name='BREAD';
 * 
 * 
 *  To connect node js with casssandra use below driver
 * 
 *  npm install cassandra-driver
 * 
 * 
 */
