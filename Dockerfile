COPY artifacts/dotnet-react-calendar App/
WORKDIR /App
EXPOSE 80
ENTRYPOINT ["dotnet", "dotnet-react-calendar.dll"]