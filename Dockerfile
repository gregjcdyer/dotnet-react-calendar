FROM mcr.microsoft.com/dotnet/sdk:5.0
COPY artifacts/dotnet-react-calendar App/
WORKDIR /App
EXPOSE 80
ENTRYPOINT ["dotnet", "dotnet-react-calendar.dll"]