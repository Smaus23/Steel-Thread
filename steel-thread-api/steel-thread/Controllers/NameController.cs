using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Text;
using steel_thread.Domain;
using System.Data.SqlClient;

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

        [HttpPost, Route("")]
        public IHttpActionResult Add(string fName)
        {
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
    
