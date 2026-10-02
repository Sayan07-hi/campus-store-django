from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0002_product_user"),
    ]

    operations = [
        migrations.RenameField(
            model_name="product",
            old_name="user",
            new_name="seller",
        ),
    ]