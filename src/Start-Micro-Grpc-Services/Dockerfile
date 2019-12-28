FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY ./src/Start-Micro-Grpc-Services/*.sln .
COPY ./src/Start-Micro-Grpc-Services/*.csproj .
RUN dotnet restore

# copy everything else and build app
COPY ./src/Start-Micro-Grpc-Services/ .
COPY ./src/Protos ../Protos
RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS runtime
WORKDIR /app
COPY --from=build /app/out ./
EXPOSE 80
ENTRYPOINT ["dotnet", "Start_Micro_Grpc_Services.dll"]