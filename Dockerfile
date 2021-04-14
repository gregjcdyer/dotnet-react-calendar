COPY bin/Release/net5.0/publish/ App/
WORKDIR /App
EXPOSE 80
ENTRYPOINT ["dotnet", "dotnet-react-calendar.dll"]