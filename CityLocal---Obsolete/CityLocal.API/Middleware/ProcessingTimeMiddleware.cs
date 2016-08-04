using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace CityLocal.API.Middleware
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class ProcessingTimeMiddleware
    {
        private readonly RequestDelegate _next;

        public ProcessingTimeMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            var watch=new Stopwatch();
            watch.Start();

            httpContext.Response.Headers.Add("X-Processing-Time-Milliseconds",
               new[] { watch.ElapsedMilliseconds.ToString() });
            await _next(httpContext);
        }
    }
}
