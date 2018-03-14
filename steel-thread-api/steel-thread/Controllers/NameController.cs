using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Text;
using steel_thread.Domain;
using System.Data.SqlClient;
using System.Data;

namespace steel_thread.Controllers
{
    [RoutePrefix("api/name")]
    public class NameController : ApiController
    {
        [HttpGet, Route("")]
        public List<Name> GetAll()
        {
            return RetrieveNamesFromDB();
        }

        [HttpPost, Route("add/{name}"), AllowAnonymous]
        public IHttpActionResult Add(string name)
        {
            string fname = name;
            string ConnectionString = @"Data Source=THINKPADYOGA15\SQLEXPRESS;Initial Catalog=Steel Thread;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            string query = "INSERT INTO dbo.name (Name) " + "VALUES (@Name) ";
            using (SqlConnection cn = new SqlConnection(ConnectionString))
            using (SqlCommand cmd = new SqlCommand(query,cn))
            {
                // define parameters and their values
                cmd.Parameters.Add("@Name", SqlDbType.VarChar, 50).Value = fname;


                // open connection, execute INSERT, close connection
                cn.Open();
                cmd.ExecuteNonQuery();
                cn.Close();
            }
            return Ok();
        }

        public List<Name> RetrieveNamesFromDB()
            {
            var retName = new List<Name>();
            var connection = new SqlConnection();
            connection.ConnectionString = @"Data Source=THINKPADYOGA15\SQLEXPRESS;Initial Catalog=Steel Thread;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            connection.Open();
            var transaction = connection.BeginTransaction();
            SqlDataReader reader = new SqlCommand("select * from name", connection, transaction).ExecuteReader();

            if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var add = new Name();
                            add.Id = reader.GetInt32(0);
                            add.fName = reader.GetString(1);
                            retName.Add(add);
                        }

                    }
                    connection.Close();
                    return retName;
                }
            }
        }
    
