# Generated by Django 5.2 on 2025-04-23 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('brand', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('image', models.CharField(max_length=255)),
                ('colors', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Shoe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('size', models.IntegerField(help_text='European size, 42')),
                ('price', models.IntegerField()),
                ('image', models.URLField(help_text='URL to product image', max_length=500)),
            ],
        ),
    ]
